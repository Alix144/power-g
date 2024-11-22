import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div>
      <Image
        src="/images/loading1.png"
        alt="Loading Icon"
        width={30}
        height={30}
        className="animate-spin"
      />
    </div>
  );
};

export default LoadingSpinner;
