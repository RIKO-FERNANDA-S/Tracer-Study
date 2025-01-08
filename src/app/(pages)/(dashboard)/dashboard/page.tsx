import Image from "next/image";
import Link from "next/link";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
import NavDashboard from "@/components/layouts/navDashboard";
import Mawa1 from "../../../../../public/imgLogo/Logo-Mawa-1.png";
import Mawa2 from "../../../../../public/imgLogo/smk_2-removebg-preview.png";
import SMA from "../../../../../public/imgLogo/sma1-removebg-preview.png";
import IconCar from "../../../../../public/img/icons/car.png"
import IconComputer from "../../../../../public/img/icons/computer.png"
import IconTools from "../../../../../public/img/icons/tools.png"
import IconMotorbike from "../../../../../public/img/icons/motorbike.png"
import IconSyringe from "../../../../../public/img/icons/syringe.png"
import IconHandCoin from "../../../../../public/img/icons/hand-coin.png"
import IconPenAndRuler from "../../../../../public/img/icons/pencil-ruler.png"
import IconBuilding from "../../../../../public/img/icons/building.png"

async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  if (session?.user.role !== "admin") {
    redirect("/dashboardUser");
  }

  return (
    <main className="w-full h-screen bg-gray-50">
      <section className="w-full h-screen">
        <div className="w-full h-full flex flex-col gap-8 ">
          <NavDashboard />
          <div className="w-full h-full ">
            <section className="h-max w-full flex justify-between items-center px-8 pb-3">
              <h1 className="text-xl">Data Alumni</h1>
              <div className="flex items-center gap-3">
                <button className="flex items-center">
                  <h2 className="text-lg">Tahun 2024</h2>
                  <i className="bx bx-chevron-down bx-sm"></i>
                </button>
                <div className="">
                  <i className="bx bx-dots-vertical-rounded bx-sm"></i>
                </div>
              </div>
            </section>

            <section className="w-full h-max flex flex-col gap-5 font-Poppins px-7 py-4">
              <div className="w-full h-max flex gap-10 justify-between items-center bg-white shadow-md rounded-md px-7">
                <div className="w-max h-max p-5 flex items-center gap-5">
                  <div className="flex items-center gap-6 ">
                    <Image src={Mawa1} alt="mawa 1" className="w-24 "></Image>
                  </div>
                  <div className="flex flex-col justify-center gap-1 w-full">
                    <Link href="/dashboard/mawa1" className="flex justify-between items-center w-full">
                      <h1 className="text-lg">SMK MAWA 1</h1>
                      <i className="bx bx-chevron-right bx-sm"></i>
                    </Link>
                    <div>
                      <h1 className="text-4xl">
                        2000<span className="text-lg">/siswa</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-max h-max p-5 flex items-center gap-5 ">
                  <div className="flex items-center gap-6 h-full">
                    <Image src={Mawa2} alt="mawa 1" className="w-28 "></Image>
                  </div>
                  <div className="flex flex-col justify-center gap-1 w-full">
                    <div className="flex justify-between items-center w-full">
                      <h1 className="text-lg">SMK MAWA 2</h1>
                      <i className="bx bx-chevron-right bx-sm"></i>
                    </div>
                    <div>
                      <h1 className="text-4xl">
                        2000<span className="text-lg">/siswa</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-max h-max p-5 flex items-center gap-5">
                  <div className="flex items-center gap-6 ">
                    <Image src={SMA} alt="mawa 1" className="w-24 "></Image>
                  </div>
                  <div className="flex flex-col justify-center gap-1 w-full">
                    <div className="flex justify-between items-center w-full">
                      <h1 className="text-lg">SMA PLUS</h1>
                      <i className="bx bx-chevron-right bx-sm"></i>
                    </div>
                    <div>
                      <h1 className="text-4xl">
                        2000<span className="text-lg">/siswa</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mawa 1 */}
              {/* <article className="w-full h-20 xl:h-44 flex gap-5">
                <div className="w-3/12 h-full bg-sky-50 shadow-lg justify-around rounded-xl flex flex-col p-5 ">
                  <span className="flex items-end">
                    <h1 className="font-semibold text-3xl">300 Total Peserta</h1>
                  </span>
                  <span>
                  <h1 className="font-normal text-xl">Teknik KJT</h1>
                  <p className="font-extralight text-xl">290 Alumni Input</p>
                  </span>
                </div>
                <div className="w-3/12 h-full bg-sky-50 shadow-lg rounded-xl flex flex-col p-5 justify-around">
                  <span className="flex items-end">
                    <h1 className="font-semibold text-3xl">300 Total Peserta</h1>
                  </span>
                  <span>
                  <h1 className="font-normal text-xl">Teknik Permesinan</h1>
                  <p className="font-extralight text-xl">290 Alumni Input</p>
                  </span>
                </div>
                <div className="w-3/12 h-full bg-sky-50 shadow-lg rounded-xl flex flex-col p-5 justify-around">
                  <span className="flex items-end">
                    <h1 className="font-semibold text-3xl">300 Total Peserta</h1>
                  </span>
                  <span>
                  <h1 className="font-normal text-xl">Teknik BSM</h1>
                  <p className="font-extralight text-xl">290 Alumni Input</p>
                  </span>
                </div>
                <div className="w-3/12 h-full bg-sky-50 shadow-lg rounded-xl flex flex-col p-5 justify-around">
                  <span className="flex items-end">
                    <h1 className="font-semibold text-3xl">300 Total Peserta</h1>
                  </span>
                  <span>
                  <h1 className="font-normal text-xl">Teknik KR</h1>
                  <p className="font-extralight text-xl">290 Alumni Input</p>
                  </span>
                </div>
              </article> */}

              {/* Mawa 2 */}
              {/* <article className="w-full h-44 flex gap-5">
                <div className="w-3/12 h-full bg-sky-50 shadow-lg rounded-xl flex flex-col p-5 justify-around">
                  <span className="flex items-end">
                    <h1 className="font-semibold text-3xl">300 Total Peserta</h1>
                  </span>
                  <span>
                  <h1 className="font-normal text-xl">Akutansi</h1>
                  <p className="font-extralight text-xl">290 Alumni Input</p>
                  </span>
                </div>
                <div className="w-3/12 h-full bg-sky-50 shadow-lg rounded-xl flex flex-col p-5 justify-around">
                  <span className="flex items-end">
                    <h1 className="font-semibold text-3xl">300 Total Peserta</h1>
                  </span>
                  <span>
                  <h1 className="font-normal text-xl">MP</h1>
                  <p className="font-extralight text-xl">290 Alumni Input</p>
                  </span>
                </div>
                <div className="w-3/12 h-full bg-sky-50 shadow-lg rounded-xl flex flex-col p-5 justify-around">
                  <span className="flex items-end">
                    <h1 className="font-semibold text-3xl">300 Total Peserta</h1>
                  </span>
                  <span>
                  <h1 className="font-normal text-xl">DKV</h1>
                  <p className="font-extralight text-xl">290 Alumni Input</p>
                  </span>
                </div>
                <div className="w-3/12 h-full bg-sky-50 shadow-lg rounded-xl flex flex-col p-5 justify-around">
                  <span className="flex items-end">
                    <h1 className="font-semibold text-3xl">300 Total Peserta</h1>
                  </span>
                  <span>
                  <h1 className="font-normal text-xl">LPKKK</h1>
                  <p className="font-extralight text-xl">290 Alumni Input</p>
                  </span>
                </div>
              </article> */}
            </section>

            <section className="w-full h-max flex py-5">
              <div className="w-full h-max px-7 flex gap-7">
                <div className="w-1/2 h-max ">
                  <h1 className="text-xl mb-4">Data Siswa Terbaru</h1>
                  <div className="w-full h-full bg-white shadow-md p-5 rounded-md">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr className="bg-base-200">
                            <th></th>
                            <th>Name</th>
                            <th>Jurusan</th>
                            <th>Tahun</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr >
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 flex flex-col justify-center gap-14">
                <div className=" w-full h-max">
                  <h1 className="text-lg mb-4">SMK Darma Siswa 1</h1>
                  <div className="bg-white shadow-md w-max h-max rounded-md p-5 flex gap-5 ">
                    <article className="flex items-center gap-2">
                      <div>
                      <Image src={IconComputer} alt="computer-icons" className="w-10 h-auto"></Image>
                      </div>
                      <div className="leading-1 flex flex-col">
                        <h1 className="text-lg font-medium">TKJT</h1>
                        <p>200 siswa</p>
                      </div>
                    </article>
                    <article className="flex items-center gap-2">
                      <div>
                      <Image src={IconTools} alt="IconTools-icons" className="w-10 h-auto"></Image>
                      </div>
                      <div className="leading-1 flex flex-col">
                        <h1 className="text-lg font-medium">TP</h1>
                        <p>200 siswa</p>
                      </div>
                    </article>
                    <article className="flex items-center gap-2">
                      <div>
                      <Image src={IconCar} alt="IconCar-icons" className="w-10 h-auto"></Image>
                      </div>
                      <div className="leading-1 flex flex-col">
                        <h1 className="text-lg font-medium">TKRO</h1>
                        <p>200 siswa</p>
                      </div>
                    </article>
                    <article className="flex items-center gap-2">
                      <div>
                      <Image src={IconMotorbike} alt="IconMotorbike-icons" className="w-10 h-auto"></Image>
                      </div>
                      <div className="leading-1 flex flex-col">
                        <h1 className="text-lg font-medium">TBSM</h1>
                        <p>200 siswa</p>
                      </div>
                    </article>
                  </div>
                </div>

                <div className=" w-full h-max">
                  <h1 className="text-lg mb-4">SMK Darma Siswa 2</h1>
                  <div className="bg-white shadow-md w-max h-max rounded-md p-5 flex gap-5 ">
                    <article className="flex items-center gap-2">
                      <div>
                      <Image src={IconHandCoin} alt="IconHandCoin-icons" className="w-10 h-auto"></Image>
                      </div>
                      <div className="leading-1 flex flex-col">
                        <h1 className="text-lg font-medium">AK</h1>
                        <p>200 siswa</p>
                      </div>
                    </article>
                    <article className="flex items-center gap-2">
                      <div>
                      <Image src={IconSyringe} alt="IconSyringe-icons" className="w-10 h-auto"></Image>
                      </div>
                      <div className="leading-1 flex flex-col">
                        <h1 className="text-lg font-medium">FKK</h1>
                        <p>200 siswa</p>
                      </div>
                    </article>
                    <article className="flex items-center gap-2">
                      <div>
                      <Image src={IconPenAndRuler} alt="IconPenAndRuler-icons" className="w-10 h-auto"></Image>
                      </div>
                      <div className="leading-1 flex flex-col">
                        <h1 className="text-lg font-medium">DKV</h1>
                        <p>200 siswa</p>
                      </div>
                    </article>
                    <article className="flex items-center gap-2">
                      <div>
                      <Image src={IconBuilding} alt="Building-icons" className="w-10 h-auto"></Image>
                      </div>
                      <div className="leading-1 flex flex-col">
                        <h1 className="text-lg font-medium">OTKP</h1>
                        <p>200 siswa</p>
                      </div>
                    </article>
                  </div>
                </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
