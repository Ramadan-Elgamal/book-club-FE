import { Loader } from "@mantine/core";
const SplashScreen = () => {
  return (
    <div
      className={`flex h-screen w-screen items-center justify-center bg-white opacity-100`}
    >
      <Loader size={"lg"} />
    </div>
  );
};

export default SplashScreen;
