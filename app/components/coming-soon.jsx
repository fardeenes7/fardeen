import programming from "../../public/images/programming.svg";
import Image from "next/image";

export const ComingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
            <Image
                src={programming}
                width={250}
                height={400}
                alt="Programmer Illustration"
            />
            <h1 className="font-display text-6xl mt-8 ">Coming soon</h1>
        </div>
    );
};
