import React from "react";
import {
  ListItemBase,
  MainContentBase,
  SectionContentBase,
} from "../components";

const About: React.FC = () => {
  return (
   <MainContentBase>
    <SectionContentBase title="What is this website for?">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eligendi quibusdam, vero neque ut earum soluta reprehenderit accusamus cumque in, molestias qui minima doloremque deleniti eius! Facilis in fuga pariatur voluptas aliquam. Sed eaque culpa error aperiam eum quam voluptatibus beatae voluptate nisi optio voluptatem dolorem saepe quas, blanditiis nihil!</p>
    </SectionContentBase>

    <SectionContentBase title="How does it generate tints and shades?">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos exercitationem voluptate labore quibusdam minus vel odit laborum, iusto optio? Ab iusto quas assumenda at facere delectus doloribus quasi a hic? Eveniet nisi tempora ullam sint facere quos rerum est? Commodi voluptatum repudiandae veniam deleniti quod odio harum omnis quidem hic molestiae inventore possimus maiores consequuntur dignissimos, expedita pariatur optio consectetur obcaecati beatae voluptas, totam adipisci. Repudiandae fuga quae laudantium quia facere quaerat tempore soluta mollitia?</p>
    </SectionContentBase>

    <SectionContentBase title="Other details">
      <ul>
        <ListItemBase>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptatem cupiditate voluptas perferendis porro voluptatum.
        </ListItemBase>

        <ListItemBase>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestias?
        </ListItemBase>

        <ListItemBase>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis porro corrupti ipsam nobis possimus quos aut. Labore.
        </ListItemBase>

        <ListItemBase>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </ListItemBase>
      </ul>
    </SectionContentBase>
   </MainContentBase>
  );
};

export default About;
