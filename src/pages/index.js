import Image from 'next/image';
import BackgroundVideo from 'next-video/background-video';
import NavBar from '@/components/NavBar/NavBar';
import { musicians } from '@/database/musicians/musicians';
import { s03 } from '@/database/season/season3';

export default function Home() {
  return (
    <>
      <main>
        <div className="topContainer">
          <div className="landingTextContainer">
            {s03.map(e => (
              <div className="eventContainer" key={e.title}>
                <div className="eventTitle">{e.title}</div>
              </div>
            ))}
          </div>
          <div className="landingBgVideo">&nbsp;</div>
        </div>
      </main>
      ;
    </>
  );
}
