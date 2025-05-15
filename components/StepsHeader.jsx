import { KeyboardArrowLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function StepsHeader() {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center space-x-2 py-5 px-3">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <KeyboardArrowLeft />
        </div>
        <p className="text-lg font-semibold">Create Gig Posting</p>
      </div>

      <hr className="mx-12 border-gray-400"></hr>
    </>
  );
}
