type useInfo = {
  Name: string;
  Image: string;
  Discription: string;
  Role: string;
};

export const TeamCards = ({ Name, Discription, Image, Role }: useInfo) => {
  return (
    <div className="overflow-hidden w-72 h-120">
      <a href="#" className="group relative block bg-black">
        <img
          alt="Employe Image"
          src={Image}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            {Role}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">{Name}</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">{Discription}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
