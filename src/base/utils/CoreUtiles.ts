/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import _ from "base/core/lodash";
import dayjs from "dayjs";
import { ChangeEvent } from "react";
import { PageConfig, RouteConfig } from "../types/routes";
import { BASE_URL } from "~/app/configs/apiConfig";
class CoreUtils {
  static filterArrayByString(mainArr: any[], searchText: string) {
    if (searchText === "") {
      return mainArr;
    }
    searchText = searchText.toLowerCase();

    return mainArr.filter((itemObj) => this.searchInObj(itemObj, searchText));
  }

  static searchInObj(itemObj: any, searchText: string) {
    if (!itemObj) {
      return false;
    }
    const propArray = Object.keys(itemObj);
    for (let i = 0; i < propArray.length; i += 1) {
      const prop = propArray[i];
      const value = itemObj[prop];
      if (typeof value === "string") {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      } else if (Array.isArray(value)) {
        if (this.searchInArray(value, searchText)) {
          return true;
        }
      }
      if (typeof value === "object") {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
    }
    return false;
  }

  static searchInArray(arr: any[], searchText: string) {
    arr.forEach((value) => {
      if (typeof value === "string") {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      }
      if (typeof value === "object") {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
      return false;
    });
    return false;
  }

  static searchInString(value: string, searchText: string) {
    return value.toLowerCase().includes(searchText);
  }

  static generateGUID() {
    function S4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return S4() + S4();
  }

  static toggleInArray(item: any, array: any[]) {
    if (array.indexOf(item) === -1) {
      array.push(item);
    } else {
      array.splice(array.indexOf(item), 1);
    }
  }

  static handleize(text: string) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/\W+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }

  static setRoutes(config: PageConfig, defaultAuth: string[] | undefined) {
    let routes = [...config.routes];
    routes = routes.map((route) => {
      let auth =
        config.auth || config.auth === null ? config.auth : defaultAuth || null;
      auth = route.auth || route.auth === null ? route.auth : auth;
      const settings = _.merge({}, config.settings, route.settings);
      return {
        ...route,
        settings,
        auth,
      };
    });

    return [...routes];
  }

  static generateRoutesFromConfigs(
    configs: PageConfig[],
    defaultAuth: string[] | undefined
  ) {
    let allRoutes: RouteConfig[] = [];
    configs.forEach((config) => {
      allRoutes = [...allRoutes, ...this.setRoutes(config, defaultAuth)];
    });
    return allRoutes;
  }

  static hasPermission(
    authArr: string[] | undefined | null,
    userRole: string | string[]
  ) {
    if (authArr === null || authArr === undefined) {
      return true;
    }
    if (authArr.length === 0) {
      return !userRole || userRole.length === 0;
    }
    if (userRole && Array.isArray(userRole)) {
      return authArr.some((r) => userRole.indexOf(r) >= 0);
    }
    return authArr.includes(userRole);
  }

  static getFlatNavigation(navigationItems: any, flatNavigation: any[] = []) {
    for (let i = 0; i < navigationItems.length; i += 1) {
      const navItem = navigationItems[i];
      if (navItem.type === "item") {
        flatNavigation.push({
          id: navItem.id,
          title: navItem.title,
          type: navItem.type,
          icon: navItem.icon || false,
          url: navItem.url,
          auth: navItem.auth || null,
        });
      }
      if (navItem.type === "collapse" || navItem.type === "group") {
        if (navItem.children) {
          this.getFlatNavigation(navItem.children, flatNavigation);
        }
      }
    }
    return flatNavigation;
  }

  static getTimeRemaining(endtime: string | number | Date | dayjs.Dayjs) {
    const total =
      Date.parse(endtime.toString()) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  static timeconvertorhhmmss(time: number) {
    if (time >= 3600) {
      return new Date(time * 1000).toISOString().substr(11, 8);
    } else if (time < 3600 && time >= 600) {
      return new Date(time * 1000).toISOString().substring(14, 19);
    } else {
      return new Date(time * 1000).toISOString().substring(15, 19);
    }
  }

  static uploadDocuments = async (files: File[], setIsLoading: any) => {
    setIsLoading({
      loading: true,
      progress: 5,
    });
    try {
      const uploadUrls = await Promise.all(
        files.map(async (file) => {
          const { data } = await axios.get(`${BASE_URL}/presigned_upload`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          return { document: data.data.url_link, description: file.name };
        })
      );
      const filesPromise = uploadUrls.map(({ document }, i) =>
        axios.put(document, files[i], {
          headers: {
            "Content-Type": files[i].type,
            "Content-Disposition": "inline",
          },
          onUploadProgress: (e: any) => {
            setIsLoading({
              loading: true,
              progress: Math.trunc((e.loaded / (e.total || 1)) * 100),
            });
          },
        })
      );
      await Promise.all(filesPromise);
      setIsLoading({
        loading: false,
        progress: 0,
      });
      return uploadUrls.map(({ document, description }) => ({
        document: document.split("?")[0],
        description,
      }));
    } catch (error) {
      setIsLoading({
        loading: false,
        progress: 0,
      });
    }
  };

  static uploadDocumentsFetch = async (files: File[], setIsLoading: any) => {
    try {
      const uploadUrls = await Promise.all(
        files.map(async (file) => {
          const response = await fetch(`${BASE_URL}/presigned_upload`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "accept-language": `${localStorage.getItem("lang") || "en"}`,
            },
          });
          const data = await response.json();
          return { document: data.data.url_link, description: file.name };
        })
      );

      const filesPromise = uploadUrls.map(({ document }, i) =>
        axios.put(document, files[i], {
          headers: {
            "Content-Type": files[i].type,
            "Content-Disposition": "inline",
          },
          onUploadProgress: (e: any) => {
            setIsLoading({
              loading: true,
              progress: Math.trunc((e.loaded / (e.total || 1)) * 100),
            });
          },
        })
      );
      await Promise.all(filesPromise);
      setIsLoading({
        loading: false,
        progress: 0,
      });
      return uploadUrls.map(({ document, description }) => ({
        document: document.split("?")[0],
        description,
      }));
    } catch (error) {
      setIsLoading({
        loading: false,
        progress: 0,
      });
    }
  };

  static getRGB(c: string) {
    return parseInt(c, 16) || c;
  }

  static getsRGB(c: string) {
    return (this.getRGB(c) as number) / 255 <= 0.03928
      ? (this.getRGB(c) as number) / 255 / 12.92
      : Math.pow(((this.getRGB(c) as number) / 255 + 0.055) / 1.055, 2.4);
  }

  static getLuminance(hexColor: string) {
    return (
      0.2126 * this.getsRGB(hexColor.substr(1, 2)) +
      0.7152 * this.getsRGB(hexColor.substr(3, 2)) +
      0.0722 * this.getsRGB(hexColor.substr(-2))
    );
  }

  static getContrast(f: string, b: string) {
    const L1 = this.getLuminance(f);
    const L2 = this.getLuminance(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }

  static getTextColor(bgColor: string) {
    const whiteContrast = this.getContrast(bgColor, "#ffffff");
    const blackContrast = this.getContrast(bgColor, "#000000");

    return whiteContrast > blackContrast ? "#ffffff" : "#000000";
  }

  static handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  static handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };
  static handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.blur();
  };

  static formatApiOptions(options: any) {
    return options?.map((option: any) => ({
      label: `${option.name}`,
      value: option.id,
    }));
  }

  static onChangeDelayed({
    event,
    onChange,
    timeout,
    setTimeOutValue,
  }: {
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLOptionElement
    >;
    onChange: (value: string | number) => void;
    timeout: string | number | null;
    setTimeOutValue: Function;
  }) {
    if (timeout) clearTimeout(timeout);
    setTimeOutValue(
      setTimeout(function () {
        //  @ts-ignore
        if (event?.keyCode !== 13) {
          onChange(event.target.value);
        }
      }, 1000)
    );
  }

  static donwloadFile = (url: string, name?: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = name || "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  static fetchFile = async (file: any) => {
    const response = await fetch(file.document);
    if (!response.ok) throw new Error(`Failed to fetch ${file.document}`);
    const blob = await response.blob();
    const extenstion = file.title?.split(".")[1];
    return { name: `${file.description}.${extenstion}`, blob };
  };

  static getFileExtension = (url: string) => {
    const segments = url.split("/");

    // Get the last segment of the URL, which is the filename
    const filename = segments?.pop()?.split("?")[0];

    // Extract the extension by splitting the filename by '.' and getting the last part
    const extension = filename?.split(".").pop();

    return extension;
  };
}

export default CoreUtils;
