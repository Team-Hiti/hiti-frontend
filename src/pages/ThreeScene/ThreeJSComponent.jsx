import React, { useState } from "react";
import { Canvas, useLoader, extend } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import "./ThreeJSComponent.css";

extend({ PlaneGeometry: THREE.PlaneGeometry });

function Model({ path, scale, position, rotation }) {
  const { scene } = useGLTF(path);
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

function Card({ textureSrc, title, position, rotation, h, w, onClick }) {
  const texture = useLoader(THREE.TextureLoader, textureSrc);
  return (
    <mesh position={position} rotation={rotation} onClick={onClick}>
      <planeGeometry args={[h, w]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

function FullScreenBox({ title, text, isGallery, images, onClose }) {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleExitFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="fullscreen-box">
      {fullScreenImage ? (
        <div className="full-image-overlay" onClick={handleExitFullScreen}>
          <img src={fullScreenImage} alt="Full Screen" className="full-image" />
        </div>
      ) : (
        <div className="box-content">
          <h1>{title}</h1>
          {isGallery ? (
            <div className="gallery">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick(src);
                  }}
                />
              ))}
            </div>
          ) : (
            <p>{text}</p>
          )}
        </div>
      )}
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

function ThreeJSComponent() {
  const [objToRender, setObjToRender] = useState("eye");
  const [boxVisible, setBoxVisible] = useState(false);
  const [boxTitle, setBoxTitle] = useState("");
  const [boxText, setBoxText] = useState("");
  const [isGallery, setIsGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleCardClick = (title, text, gallery = false, images = []) => {
    setBoxTitle(title);
    setBoxText(text);
    setIsGallery(gallery);
    setGalleryImages(images);
    setBoxVisible(true);
  };

  const handleCloseBox = () => {
    setBoxVisible(false);
    setBoxTitle("");
    setBoxText("");
    setIsGallery(false);
    setGalleryImages([]);
  };

  return (
    <div className="ThreeJSComponent">
      {boxVisible && (
        <FullScreenBox
          title={boxTitle}
          text={boxText}
          isGallery={isGallery}
          images={galleryImages}
          onClose={handleCloseBox}
        />
      )}
      <Canvas
        camera={{ position: [15, 12, 0], fov: 80, near: 0.01, far: 1000 }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[100, 100, 100]} intensity={1} />
        <pointLight position={[-100, -100, 100]} intensity={1} />
        <pointLight position={[0, 0, 300]} intensity={1} />

        <Model
          path={`/models/${objToRender}/scene-v2.gltf`}
          scale={[10, 10, 10]}
          position={[0, 10, 0]}
          rotation={[0, 0, 0]}
        />

        <Text
          position={[14, 45, -80]}
          fontSize={5}
          color="yellow"
          bevelEnabled
          bevelThickness={0.5}
          bevelSize={0.3}
          bevelSegments={5}
        >
          S T O R I E S O F P A T A N
        </Text>

        <Card
          textureSrc="/js/history.jpeg"
          title="Nagbahal History"
          position={[-9, 20, -60]}
          rotation={[-Math.PI / 50, 0, 0]}
          h={40}
          w={25}
          onClick={() =>
            handleCardClick(
              "Nagbahal History",

              `Nagbahal, a historic courtyard in Lalitpur, has faced significant challenges in managing its water resources over the years. Before the 2072 earthquake, the wells in Nagbahal were dry, depriving the community of a critical water source. However, after the earthquake, a phenomenon known as “muhan futyo” occurred, where new water sources emerged, and the wells in Nagbahal began to fill with water. This unexpected change provided a much-needed boost to the local water supply, although it brought with it a new set of challenges.

Despite the availability of water, the quality of the well water was too impure for drinking purposes. To address this, the community set up a filtration system in the park adjacent to the well. The filtered water is now used by the residents for washing clothes and dishes, ensuring that the water is put to good use despite its limitations. To access these services, residents pay a monthly fee of Rs 100, highlighting the community's efforts to self-manage and sustain their water resources.

One of the two individuals interviewed described the water flow as being as strong as a river flowing under the well, indicating the abundance of water post-earthquake. However, this water abundance has not translated into potable water, underscoring the ongoing struggle to maintain a safe and reliable water supply in the face of natural and man-made challenges.

At a small distance from the main courtyard, another well serves as the primary source of water for 27 households. The inconsistency of water from the Melamchi project, coupled with concerns about its safety, has made this well an essential resource for the local community. The reliance on well water, despite its impurities, reflects the adaptive strategies employed by the residents of Nagbahal to cope with the broader water management issues affecting the Kathmandu Valley.
`
            )
          }
        />
        <Card
          textureSrc="/js/site_analysis.jpg"
          title="Nagbahal Transformation"
          position={[35, 20, -60]}
          rotation={[-Math.PI / 50, 0, 0]}
          h={40}
          w={25}
          onClick={() =>
            handleCardClick(
              "Nagbahal Transformation",
              `Nagbahal is a courtyard rich in history and culture, but it has also become a microcosm of the challenges facing historic urban spaces in modern times. The courtyard, home to 34 households, has seen its character change as residents sought ways to adapt to the pressures of urbanization and attract new economic opportunities.

In an effort to draw tourists, the people of Nagbahal initiated a drive to transform the courtyard into a commercial hub. They built shutters for setting up businesses, hoping to capitalize on the cultural significance of the area. However, this initiative did not succeed as expected, leading to the eventual abandonment of the idea. This setback highlights the complexities of balancing economic development with the preservation of cultural heritage in historic sites like Nagbahal.

Nagbahal has also become a popular parking destination, with vehicles frequently entering and leaving through its two main entrances. On a typical afternoon, around 30 vehicles, both two-wheelers and four-wheelers, can be seen parked in the courtyard. This constant flow of traffic has turned Nagbahal into a transit hub, a stark contrast to its original purpose as a peaceful residential and religious space. The shift from a serene courtyard to a bustling parking area reflects the ongoing tension between maintaining the historical integrity of the site and accommodating the needs of a growing urban population.

Interestingly, all the monuments in Nagbahal are of Buddhist origin, except for a single Ganesh statue tucked away between two pattis. This small yet significant detail underscores the predominantly Buddhist heritage of the area, which continues to influence the cultural identity of the community.

With four main entrances, Nagbahal remains a well-connected and accessible space within the urban fabric of Patan. However, the influx of vehicles and the failed attempt to commercialize the area have brought new challenges to the residents. The site analysis of Nagbahal reveals a community in transition, grappling with the pressures of modernization while striving to preserve its cultural and historical legacy. The story of Nagbahal is one of luck and chaos—a community adapting to unforeseen changes and navigating the complexities of urban life in a historic setting.
`
            )
          }
        />
        <Card
          textureSrc="/js/restoration.jpg"
          title="Nagbahal Hiti Restoration"
          position={[0, 0, -30]}
          rotation={[0, 0, 0]}
          h={25}
          w={15}
          onClick={() =>
            handleCardClick(
              "Nagbahal Hiti Restoration",
              `Nagbahal Hiti, an ancient stone spout located in the courtyard of Nagbahal, is a crucial part of the area's historical and cultural fabric. However, for the past decade, the hiti had been dry, depriving the community of a vital water source. The hiti's drying was primarily due to a poor water supply and a partially blocked outlet, both of which needed urgent attention.
The hiti's water source is located in Khwayebaha, southeast of Nagbahal, and feeds an inlet channel over 530 meters long. This channel, constructed of bricks and lined with filtration bowls, runs 9-12 feet underground through a dense residential area. Over time, it became obstructed, leading to the drying up of the hiti.
In response, a restoration project was undertaken, funded by the U.S. Ambassador’s Fund for Cultural Preservation and supported by the Nagbahal Hiti User Group. The project focused on repairing the inlet and outlet channels, mapping the inlet for future maintenance, and cleaning the channel through maintenance holes filled with filtration materials. The restoration aimed to increase the water flow to the hiti and protect the channel from damage caused by new construction in the area.
Despite the successful restoration, the water from Nagbahal Hiti is currently contaminated by sewage from a broken sewer line. Only those unaware of the contamination continue to use the water, underscoring the need for ongoing maintenance and protection of the hiti to ensure its sustainability as a community resource.
The restoration of Nagbahal Hiti is a significant step in preserving the courtyard's historical legacy while addressing the practical needs of its residents. It also highlights the importance of protecting and maintaining traditional water systems, which remain vital to the daily lives of communities in the Kathmandu Valley. As urbanization continues to pose challenges, the lessons learned from the Nagbahal Hiti restoration project will be invaluable in safeguarding other historic water sources in the region.

`
            )
          }
        />
        <Card
          textureSrc="/js/card3.jpg"
          title="Gallery"
          position={[29, 0, -30]}
          rotation={[0, 0, 0]}
          h={25}
          w={15}
          onClick={() =>
            handleCardClick("Gallery", "", true, [
              "/gallery/1 (1).jpg",
              "/gallery/1 (2).jpg",
              "/gallery/1 (3).jpg",
              "/gallery/1 (4).jpg",
              "/gallery/1 (5).jpg",
              "/gallery/1 (6).jpg",
              "/gallery/1 (7).jpg",
              "/gallery/1 (8).jpg",
              "/gallery/1 (9).jpg",
              "/gallery/1 (10).jpg",
              "/gallery/1 (11).jpg",
              "/gallery/1 (12).jpg",
              "/gallery/1.jpg",
              "/gallery/2.jpg",
              "/gallery/3.jpg",
              "/gallery/4.jpg",
            ])
          }
        />

        <OrbitControls
          enablePan={true}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          target={[14, 11, -29]}
        />
      </Canvas>
    </div>
  );
}

export default ThreeJSComponent;
