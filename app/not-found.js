import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col items-center bg-[#F9593F] rounded-3xl p-8 shadow-lg space-y-4">
        <div>
          <Image src="/icon.png" width={120} height={120} alt="Icon" />
        </div>

        <div className="text-center text-white">
          <h1 className="text-3xl font-bold">Oops! Page Not Found</h1>
          <p className="text-lg mt-2">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>

          <Link href="/home">
            <p className="mt-4 text-xl text-black font-bold transition-colors bg-white rounded-full h-10 flex flex-col items-center justify-center">
              Go to Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
