import { useState } from "react";
import { FaTimes } from "react-icons/fa";

type College = {
  id: number;
  name: string;
  image: string;
  coords: number[];
  mapUrl: string;
};

const colleges: College[] = [
  
    {
      id: 1,
      name: "Pragati Secondary School",
      image: "/school/pragati.jpeg",
      coords: [27.40774030704456, 85.02223054602588],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1770.9872715143053!2d85.02214203313308!3d27.407723639066056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb4bd60cd89e5b%3A0xfb7e3bc395b5d1e1!2sPragati%20Higher%20Secondary%20School.%2C%20Hetauda%2044107!5e0!3m2!1sen!2snp!4v1756138910780!5m2!1sen!2snp"
    },
    {
      id: 2,
      name: "Hetauda Modern English Secondary Boarding School",
      image: "/school/modern.jpg",
      coords: [27.408187458646395, 85.02489044145305],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.975227042744!2d85.02479019999996!3d27.40770229999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb497ddcd3d4bb%3A0x3690fd2c433f2336!2sHetauda%20Modern%20English%20School!5e0!3m2!1sen!2snp!4v1756179934924!5m2!1sen!2snp"
    },

    // New entries below:
    {
      id: 3,
      name: "Krishna Aadarsha Secondary English School (K.A.S.E.S)",
      image: "/school/kases.jpg",
      coords: [27.40441967720184, 85.01654873143174],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13761.31956717462!2d85.00925312356591!3d27.41356314975287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb4bd650310083%3A0x76a7c76b3b215942!2sKrishna%20Adarsha%20School!5e1!3m2!1sen!2snp!4v1756180063756!5m2!1sen!2snp"
    },
    {
      id: 4,
      name: "Shree Shramik Secondary School",
      image: "/school/shramik.jpg",
      coords: [27.419483990109107, 85.02888638653233],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45646.742007307104!2d85.00611539724088!3d27.388023230584153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb49821fcb0533%3A0xcd7e756ddb66f9da!2sShree%20Shramik%20Sec.School!5e1!3m2!1sen!2snp!4v1756180164643!5m2!1sen!2snp"
    },
    {
      id: 5,
      name: "Kamane Academy",
      image: "/school/kamane.jpg",
      coords: [27.40268190139443, 85.04114720485376],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.6805593552895!2d85.04020306736524!3d27.402300900961233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb49d7daa94d37%3A0x24f52008502de0a5!2sKamane%20Academy!5e1!3m2!1sen!2snp!4v1756180227912!5m2!1sen!2snp"
    },
    {
      id: 6,
      name: "Shree Jana Jyoti Higher Secondary School",
      image: "/school/janajyoti.jpg",
      coords: [27.401164733550893, 85.00240160307578],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.8032589154536!2d85.00228109999999!3d27.398359199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb4bc764c6820f%3A0x75414418208d81ce!2sShree%20Jana%20Jyoti%20Higher%20Secondary%20School!5e1!3m2!1sen!2snp!4v1756180251336!5m2!1sen!2snp"
    },
    {
      id: 7,
      name: "Russell Academy",
      image: "/school/russell.jpg",
      coords: [27.415833906891184, 85.01837130574461],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36461.45555702764!2d85.00108898345569!3d27.40644704614346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb4b14e3282c23%3A0xae83a844ed1a4f69!2sRussell%20Academy!5e1!3m2!1sen!2snp!4v1756180332815!5m2!1sen!2snp"
    },
    {
      id: 8,
      name: "Seminary Academic Council Secondary School",
      image: "/school/seminary.jpg",
      coords: [27.42211401129691, 85.04111760816525],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36458.38366577278!2d85.02895176286977!3d27.41575561880407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb499ed95c3b23%3A0xa22b66f45177d3ed!2sSeminary%20Academic%20Council%20Secondary%20School!5e1!3m2!1sen!2snp!4v1756180369063!5m2!1sen!2snp"
    },
    {
      id: 9,
      name: "Gyanodaya Balbatika Secondary Boarding School",
      image: "/school/gyanodaya.jpg",
      coords: [27.41977503229795, 85.04847525885926],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16598.259611475652!2d85.04117661267976!3d27.41563962008896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb49a13b60feb5%3A0x7bb1117e7d7d9f31!2sGyanodaya%20Balbatika%20Secondary%20Boarding%20School!5e1!3m2!1sen!2snp!4v1756180411736!5m2!1sen!2snp"
    },

    {
      id: 12,
      name: "Bhutandevi Higher Secondary School",
      image: "/school/bhutandevi.jpg",
      coords: [27.43003983903213, 85.03573590591867],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.877267337561!2d85.0348978!3d27.428093600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb49d79f579cf1%3A0xfc7c0e7f3fee1e4!2sBhutandevi%20Higher%20Secondary%20School!5e1!3m2!1sen!2snp!4v1756182504960!5m2!1sen!2snp"
    },
    {
      id: 13,
      name: "Rose Academy",
      image: "/school/rose.jpg",
      coords: [27.43066245705461, 85.03328415036074],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16595.79443770681!2d85.02438083729074!3d27.4320407574667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb498e26471f6f%3A0x2944e0a2a1390d86!2sRose%20Academy!5e1!3m2!1sen!2snp!4v1756180604320!5m2!1sen!2snp"
    },
    {
      id: 14,
      name: "Gyanada Secondary School",
      image: "/school/gyanada.jpg",
      coords: [27.424549734541873, 85.02383726697181],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7556.050184586408!2d85.02089150333327!3d27.423880365891062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb49cdf52b7c99%3A0xd38b5a80bce5e6c2!2sGyanada%20Secondary%20School!5e1!3m2!1sen!2snp!4v1756180629520!5m2!1sen!2snp"
    },
    {
      id: 15,
      name: "Mahendra Kiran Secondary School",
      image: "/school/mahendra_kiran.jpg",
      coords: [27.450763039101012, 84.9789005420511],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16593.116931589804!2d84.9755359179258!3d27.44984432996806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb4a86519724e1%3A0x59dcb772eaa00371!2sMahendra%20Kiran%20Secondary%20School!5e1!3m2!1sen!2snp!4v1756180688211!5m2!1sen!2snp"
    },
    {
      id: 16,
      name: "Tribhuwan Secondary School",
      image: "/school/tribhuwan.jpg",
      coords: [27.437727621658922, 84.98967671759466],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16595.38147381011!2d84.98160161969395!3d27.434787378135788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb4a677856bc11%3A0x595d0ecc30cbe3f6!2sTribhuwan%20Secondary%20School!5e1!3m2!1sen!2snp!4v1756180706931!5m2!1sen!2snp"
    },
    {
      id: 17,
      name: "Laxmi Lower Secondary School, Chisapani",
      image: "/school/laxmi.jpg",
      coords: [27.41527499778467, 85.04069965260734],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4149.580326281068!2d85.03935380295722!3d27.415229047738713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb499e2699c4ff%3A0xea68e79d6043f40f!2sLaxmi%20L.S.S%2C%20Chisapani!5e1!3m2!1sen!2snp!4v1756180789405!5m2!1sen!2snp"
    },
    {
      id: 18,
      name: "Amar Secondary School",
      image: "/school/amar.jpg",
      coords: [27.43294827466413, 85.02637116142195],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1719.865148690947!2d85.0253251!3d27.4328102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb498bcef79d9d%3A0xa344d6569f62afb3!2sAmar%20Secondary%20School!5e1!3m2!1sen!2snp!4v1756180825031!5m2!1sen!2snp"
    },
    {
      id: 19,
      name: "Shree Baljyoti Secondary School",
      image: "/school/baljyoti.jpg",
      coords: [27.42024181677238, 85.04565497301057],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.1284046733463!2d85.0455906!3d27.4200323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb49a191a7fb6b%3A0x6dce1c84aa4f593!2sShree%20Baljyoti%20Secondary%20School!5e1!3m2!1sen!2snp!4v1756181680819!5m2!1sen!2snp"
    },
    {
      id: 20,
      name: "Reliance English Boarding School",
      image: "/school/reliance.jpg",
      coords: [27.43094315451721, 85.04333675000001],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.7970827013555!2d85.04333675!3d27.430666999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb49963cf9fcbf%3A0xa436e410a5042800!2sReliance%20English%20Boarding%20School%2C%20Hetauda%2044107!5e1!3m2!1sen!2snp!4v1756181732524!5m2!1sen!2snp"
    }
];
const Partners = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Partner Schools & Colleges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedCollege(college)}
            >
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-white">{college.name}</h3>
                <div className="mt-4 text-white text-sm">
                  Click to view location
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Google Map Modal */}
      {selectedCollege && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-11/12 h-5/6 bg-white rounded-2xl overflow-hidden shadow-xl">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 z-50"
              onClick={() => setSelectedCollege(null)}
            >
              <FaTimes />
            </button>

            <iframe
              src={selectedCollege.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={selectedCollege.name}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Partners;
