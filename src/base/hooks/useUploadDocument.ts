/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "~/app/configs/apiConfig";

export type UplodedFile = {
  name: string;
  type: string;
  url: string;
  file: File;
};

type Error = {
  message: string;
};

const useUploadDocument = ({ folder }: { folder?: string }) => {
  const [loading, setLoading] = useState({
    isloading: false,
    progress: 0,
  });
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<UplodedFile[] | null>(null);

  const uploadDocuments = async (file: File[] | File | null) => {
    if (!file) return;
    setLoading({ isloading: true, progress: 0 });
    const files = Array.isArray(file) ? file : [file];
    try {
      const uploadUrls = await Promise.all(
        files.map(async (file) => {
          const sanitizedFilename = file.name.replace(/ /g, "_");
          const { data } = await axios.get(`${BASE_URL}/upload`, {
            params: {
              folder: folder ?? "",
              filename: sanitizedFilename,
            },
            headers: {
              "Content-Type": "application/json",
            },
          });
          return {
            url: data.data,
            file: file,
            name: sanitizedFilename,
            type: file.type,
          };
        }),
      );
      const uploadPromises = uploadUrls.map(({ url, file, type }) => {
        return axios.put(url, file, {
          headers: {
            "Content-Type": type,
          },
          onUploadProgress: (progressEvent) => {
            if (!progressEvent.total) return;
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setLoading({ isloading: true, progress });
          },
        });
      });
      await Promise.all(uploadPromises);
      const finalData = uploadUrls.map(({ url, ...fileData }) => ({
        ...fileData,
        url: url.split("?")[0],
      }));

      setData(finalData);
      setLoading({ isloading: false, progress: 0 });
    } catch (error) {
      setError({
        message: "Something went wrong, please try again later",
      });
      setLoading({ isloading: false, progress: 0 });
    }
  };
  return {
    uploadDocuments,
    isLoading: loading.isloading,
    progress: loading.progress,
    error,
    data,
  };
};

export default useUploadDocument;
