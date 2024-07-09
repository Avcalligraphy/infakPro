import React, { useState } from 'react'
import Label from '../components/Label';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import AuthenticatedUser from '../Layouts/Authenticated';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { auth, database } from '../Database/Fire';
import Swal from 'sweetalert2';
import { ref, update } from 'firebase/database';

const Profile = ({dataUser}) => {
  const uid = localStorage.getItem("uid");
  const [currentPassword, setCurrentPassword] = useState("");
  const [pubdet, setPubdet] = React.useState("");
  const handleUpdate = () => {
    // Membuat credential untuk otentikasi ulang dengan kata sandi saat ini
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      currentPassword
    );
    // console.log("data currentUser", auth.currentUser)

    // Reauthenticate pengguna dengan credential saat ini
    reauthenticateWithCredential(auth.currentUser, credential)
      .then(() => {
        // Berhasil otentikasi ulang, lakukan pembaruan kata sandi
        updatePassword(auth.currentUser, pubdet)
          .then(() => {
            const data = { password: pubdet };
            // Berhasil mengubah kata sandi
            // console.log("Kata sandi berhasil diubah");
            Swal.fire({
              icon: "success",
              title: "Success",
              color: "#000",
              buttonsStyling: true,
              confirmButtonColor: "#006A0B",
              text: "Kata Sandi Berhasil Diubah ",
            });
            update(ref(database, `users/${uid}/`), data);
            setCurrentPassword("");
            setPubdet("");
            // Lakukan tindakan lain yang diperlukan setelah mengubah kata sandi
          })
          .catch((error) => {
            // Gagal mengubah kata sandi
            // console.log("Gagal mengubah kata sandi", error);
          });
      })
      .catch((error) => {
        // Gagal otentikasi ulang
        Swal.fire({
          icon: "error",
          title: "Opps....",
          color: "#000",
          buttonsStyling: true,
          confirmButtonColor: "#770700",
          text: "Gagal Mengubah Kata Sandi",
        });
      });
  };
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] mt-[-48px] pb-[100px] ">
        <div className="rounded-b-[40px] bg-gradient-to-r from-[#0D377B] to-[#04214D] px-[24px] pt-[25px] h-[221px] pb-[32px] ">
          <div className="flex justify-between mt-[51px]">
            <div className='text-[24px] font-bold ' >Profile</div>
          </div>
        </div>
          <div className=' bg-[#EEF1F5] shadow-md shadow-gray-400 rounded-[20px] mx-[25px] px-[27px] pt-[23px] mt-[64px] ' >
          <div className="flex justify-center items-center mt-[-120px] ">
          <img
            alt="avatar"
            src="/images/avatar.jpg"
            className="rounded-full h-auto w-[150px] object-cover"
          />
        </div>
        <h1 className="font-regular text-[17px] text-center my-[20px] text-black ">
          {dataUser?.name}
        </h1>
          <div className="flex justify-center">
          <div className="sm:w-[370px] w-full">
            <div className="flex flex-col gap-6">
              <div>
                <Label
                  forInput="name"
                  value="Name"
                  text="text-black font-semibold"
                />
                <TextInput
                  color="gray-300"
                  type="text"
                  name="name"
                  value={dataUser?.name}
                  placeholder="Your Name"
                  autoComplete="username"
                  isFocused={true}
                  border="border-gray-300"
                  // onChange={(e) => setData("email", e.target.value)}
                />
                {/* <InputError message={errors.email} className="mt-2" /> */}
              </div>
              <div>
                <Label
                  forInput="email"
                  value="Email Address"
                  text="text-black font-semibold"
                />
                <TextInput
                  color="white"
                  type="email"
                  name="email"
                  value={dataUser?.email}
                  placeholder="Email Address"
                  autoComplete="username"
                  isFocused={true}
                  border="border-gray-300"
                  // onChange={(e) => setData("email", e.target.value)}
                />
                {/* <InputError message={errors.email} className="mt-2" /> */}
              </div>
              <div>
                <Label
                  forInput="password"
                  value="Kata Sandi Lama"
                  text="text-black font-semibold"
                />
                <TextInput
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  color="white"
                  type="password"
                  name="password"
                  placeholder="Kata Sandi Lama"
                  autoComplete="current-password"
                  border="border-gray-300"
                  // onChange={(e) => setData("password", e.target.value)}
                />
              </div>
              <div>
                <Label
                  forInput="password"
                  value="Kata Sandi Baru"
                  text="text-black font-semibold"
                />
                <TextInput
                  value={pubdet}
                  onChange={(e) => setPubdet(e.target.value)}
                  color="white"
                  type="password"	
                  name="password"
                  placeholder="Kata Sandi Baru"
                  autoComplete="current-password"
                  border="border-gray-300"
                />
              </div>
              <Button
                onClick={handleUpdate}
                width="w-full mb-[30px]"
                text="Save Account"
                color="bg-[#9EB2F1] shadow-md shadow-[#9EB2F1]"
                gap="text-black"
              />
            </div>
          </div>
          </div>
          </div>
      </div>
    </AuthenticatedUser>
  );
}

export default Profile