import { SplashScreen } from "../splash";
import i18next from "i18next";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "~/app/configs/apiConfig";

type Props = {
  appName: string;
};

const AuthSignin = ({ appName }: Props) => {
  const location = useLocation();

  useEffect(() => {
    const finalAppName = appName ? `/${appName}` : "";
    window.location.replace(
      `${BASE_URL}/api/auth/login?src=fe&next=${
        window.location.origin
      }${finalAppName}/loading?from=${location?.state?.from || "/"}&lang=${
        i18next.language
      }`
    );
  }, [appName, location?.state?.from]);

  return <SplashScreen />;
};

export default AuthSignin;
