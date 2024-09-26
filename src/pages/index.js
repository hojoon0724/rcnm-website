import Image from 'next/image';
import BackgroundVideo from 'next-video/background-video';
import { musicians } from '@/database/musicians/musicians';
import { s03 } from '@/database/season/season3';

export default function Home() {
  return (
    <>
      <main>
        <div className="topContainer">
          <div className="landingTextContainer">
            {s03.map(event => (
              <div className="eventContainer" key={event.title}>
                <div className="eventTitle">{event.title}</div>
                <div className="musiciansContainer">
                  {event.musicians.map(musicianKey => {
                    const musician = musicians[musicianKey];
                    return (
                      <div className="musician" key={musicianKey}>
                        <div className="musicianName">
                          {musician.firstName} {musician.lastName}
                        </div>
                        <div className="musicianInstrument">{musician.instrument}</div>
                        <Image
                          className="musicianPhoto"
                          src={musician.photo}
                          alt={`${musician.firstName} ${musician.lastName}`}
                        />
                      </div>
                    );
                  })}
                </div>
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
