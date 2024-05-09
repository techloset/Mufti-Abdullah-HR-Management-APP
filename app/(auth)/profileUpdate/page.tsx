"use client";
import useProfileUpdate from "./useProfileUpdate";

export default function ProfileUpdate() {
  const { handleChange, handleSubmit, loading, name } = useProfileUpdate();

  return (
    <section className="bg-black h-screen flex p-4 justify-center items-center text-white">
      <div className="flex flex-col md:w-[445px] w-full justify-center py-8 items-center lg:py-0">
        <div className="w-full rounded-lg shadow">
          <div className="md:w-[445px] my-8 w-auto">
            <p className="my-5 text-lg">Update Your Profile</p>
            <form
              className="space-y-4 md:space-y-6 w-full"
              onSubmit={handleSubmit}
            >
              <div className="w-auto border-[1px] border-primary rounded-lg p-2">
                <label className="block mb-2 text-sm font-medium text-primary dark:text-primary">
                  Enter Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Enter your new name"
                  className="outline-none bg-transparent text-white sm:text-sm block w-full p-2.5 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prborder-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? "Loading..." : "Profile Update"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
