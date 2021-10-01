import React from "react";
import "./css/storyRoot.css";
import "./css/Story.css";
import Story from "./Story";
import { useStateValue } from "./StateProvider";

function StoryRoot() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <hr className="border__story" />
      <div className="storyRoot">
        <Story
          image={user.photoURL}
          // profileSrc="https://im0-tub-ru.yandex.net/i?id=a550a01ec6a88a61c37b09cc6962575e&n=13"
          title="Create new story"
        />
        <Story
          img="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/how-often-to-Post-to-Facebook-Stories.png"
          profileSrc="https://www.lavkaremonta.ru/images/news/2019-07/9daf1388d4.jpg"
          image="https://nypost.com/wp-content/uploads/sites/2/2016/09/160928-elon-musk-mars-index.jpg?quality=90&amp;strip=all&amp;w=680&amp;h=356&amp;crop=1"
          title="Elon Musk"
          mobileClass="mobile__none"
        />
        <Story
          mobileClass="mobile__none"
          img="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/how-often-to-Post-to-Facebook-Stories.png"
          image="https://image.cnbcfm.com/api/v1/image/105783213-1552064630608gettyimages-1036093738.jpeg?v=1578602036"
          profileSrc="https://www.pngitem.com/pimgs/m/1-12671_circle-amazon-logo-png-transparent-png.png"
          title="Jeff Bezos"
        />
        <Story
          img="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/how-often-to-Post-to-Facebook-Stories.png"
          profileSrc="https://restore-icloud.ru/wp-content/uploads/2020/08/restore.jpg"
          image="https://images.boredomfiles.com/wp-content/uploads/sites/14/2019/05/Steve-Jobs-e1556718986878.jpg"
          title="Steve Jobs"
        />
        <Story
          className="mobile__none"
          img="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/how-often-to-Post-to-Facebook-Stories.png"
          image="https://www.azquotes.com/vangogh-image-quotes/32/55/Quotation-Mark-Zuckerberg-I-think-a-simple-rule-of-business-is-if-you-32-55-16.jpg"
          profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          title="Murk Zuckerberg"
        />
      </div>
      <hr className="border__story" />
    </>
  );
}

export default StoryRoot;
