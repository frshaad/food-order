import { MdDeleteOutline } from "react-icons/md";
import { LoaderSpinner } from "../reusable";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase";

type Props = {
  imageAsset: null | string;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setImageAsset: React.Dispatch<React.SetStateAction<string | null>>;
};

const FileUploadInput = ({
  imageAsset,
  isLoading,
  setIsLoading,
  setImageAsset,
}: Props) => {
  // Upload image
  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const imageFile = e.target.files![0];
    const imageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);

    const uploadTask = uploadBytesResumable(imageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshop) => {
        const uploadProgress = Math.floor(
          (snapshop.bytesTransferred / snapshop.totalBytes) * 100,
        );
        console.log("Upload is " + uploadProgress + "% done");

        switch (snapshop.state) {
          case "running":
            console.log("Upload is running");
            break;
          case "paused":
            console.log("Upload is paused");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            console.log("User doesn't have permission to access the object");
            break;
          case "storage/canceled":
            console.log("User canceled the upload");
            break;
          case "storage/unknown":
            console.log("Unknown error occurred, inspect error.serverResponse");
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
        });
      },
    );
  };

  // Delete image
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset as string);
    deleteObject(deleteRef)
      .then(() => {
        setImageAsset(null);
        setIsLoading(false);
        console.log("Image deleted successfully");
      })
      .catch((error) => {
        console.log("Can not delete the file: ", error);
      });
  };

  return (
    <div className="group relative flex h-52 w-full flex-col items-center justify-center rounded-[7px] border border-gray-200 p-2">
      {isLoading ? (
        <LoaderSpinner />
      ) : !imageAsset ? (
        <>
          <label
            htmlFor=""
            className="relative flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 text-lg text-gray-500 transition hover:text-gray-700"
          >
            <button
              className="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                ></path>
              </svg>
              Upload Image
            </button>

            <input
              type="file"
              name="uploadimage"
              accept="image/*"
              onChange={uploadImage}
              className="absolute h-full w-full cursor-pointer opacity-0"
              required
            />
          </label>
        </>
      ) : (
        <div className="relative flex h-full flex-col items-center gap-8">
          <img src={imageAsset} alt="uploaded image" className="h-2/3" />
          <button
            className="flex w-fit select-none items-center gap-3 rounded-lg border border-red-500 px-3 py-1 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 transition-all hover:opacity-75 focus:ring focus:ring-red-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
            onClick={deleteImage}
          >
            Delete Image
            <span className="text-lg">
              <MdDeleteOutline />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploadInput;
