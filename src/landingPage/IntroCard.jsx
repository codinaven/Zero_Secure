import DevImg from "../assets/DevImage.jpg";
import { TeamCards } from "../components/TeamCards.tsx";

export const Intros = () => {
  return (
    <div className="flex flex-row gap-3 p-10">
      <TeamCards
        Name="Anshu"
        Image={DevImg}
        Discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic
          asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum.
          Repudiandae?"
        Role="Full Stack Developer"
      />

      <TeamCards
        Name="Atharv Dev"
        Image={DevImg}
        Discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic
          asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum.
          Repudiandae?"
        Role="Chief Engineer"
      />
      <TeamCards
        Name="Vishwas"
        Image={DevImg}
        Discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic
          asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum.
          Repudiandae?"
        Role="Reseach"
      />
      <TeamCards
        Name="Tushar Kumar"
        Image={DevImg}
        Discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic
          asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum.
          Repudiandae?"
        Role="Developer"
      />
      <TeamCards
        Name="Purunjay Singh"
        Image={DevImg}
        Discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic
          asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum.
          Repudiandae?"
        Role="Developer"
      />
      <TeamCards
        Name="Devesh Rathore"
        Image={DevImg}
        Discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic
          asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum.
          Repudiandae?"
        Role="Marketing"
      />
    </div>
  );
};
