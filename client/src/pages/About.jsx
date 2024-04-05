import React from "react";

const About = ({}) => {
  return (
    <div className="relative flex max-w-[30rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md container mx-auto">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src="./src/images/About2.png"
          alt="back and front of a plant tag that provides instructions on how to care for the plant"
        />
      </div>
      <div className="p-6">
        <h4 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-3">
          Reading plant tags and other care information:
        </h4>
        <br></br>
        <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-3">
          Common and Scientific Names
        </h5>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          The plant label front features the plant’s common and scientific
          names, often with a photo of the fully-grown plant. The scientific
          name (or cultivar) is often in italics below the common name. When you
          search for a specific plant within the same family, use the scientific
          name for the most accurate i.d..
        </p>
        <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
        <br></br>
        <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-3">
          Sun Tolerance
        </h5>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          How much sun exposure a plant needs is often represented by a full or
          partly shaded sun icon. In general, there are three degrees of sun
          tolerance: full sun, partial sun/shade and full shade.
          <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
            <ul className="list-disc ml-5">
              <li>
                Full sun: Usually depicted by a sun icon, full sun means the
                plant needs at least six hours (but sometimes closer to eight or
                ten hours) of direct sunlight in a day.
              </li>
              <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
              <li>
                Partial sun/shade: This icon appears as a half-shaded sun.
                Plants that require partial sun need four to six hours of direct
                sunlight per day.
              </li>
              <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
              <li>
                Full shade: Plants that need full shade will have a sun icon
                that is completely shaded in on their plant tags. Full shade
                plants enjoy environments that receive only indirect sunlight or
                less than three hours of direct sunlight per day.
              </li>
              <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
              <li>
                Direct or Indirect sunlight: Some plants need a lot of indirect
                sunlight which means it is near a window or a brightly lit room
                but not in direct path of the sun. Some plants can get sunburn
                ELABORATE HERE****.
              </li>
            </ul>
          </div>
        </p>
        <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
        <br></br>
        <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-3">
          Water Requirements
        </h5>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          Water requirements are detailed or shown as raindrop icons. A plant
          label may also list the water requirements by saying the soil should
          be “dry/well-drained,” “normal” or “moist.”
          <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
          <ul className="list-disc ml-5">
            <li>
              Dry or well-drained soil: Indicated by one raindrop icon,
              maintaining dry soil means allowing the soil to dry completely
              between waterings. Even the soil below the top inch should be dry
              before watering again.
            </li>
            <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
            <li>
              Normal: Often indicated by two raindrops, normal means keeping the
              soil an inch below the surface moist. Allow the top inch of soil –
              but no more – to dry out before watering again.
            </li>
            <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
            <li>
              Moist: Moist soil or three raindrops means the soil should always
              stay moist. Water frequently to prevent the soil from drying out,
              but do not water to the point that excess water pools on the
              surface of the soil.
            </li>
          </ul>
        </p>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          Tip: Remember that new plants typically require frequent watering for
          the first few months as they establish their root systems.
          Additionally, potted plants require regular watering.
        </p>
        <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
        <br></br>
        <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-3">
          Blooms/Flowers
        </h5>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          Some plants may bloom during certain seasons or may bloom across
          multiple seasons. Some plants produce ELABORATE HERE *******.
        </p>
        <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></div>
        <br></br>
        <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-3">
          Deciduous
        </h5>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          Some plants go into hybernation or a perios of rest. They may lose all
          of their leaves and appear as though they have died but this is not
          the case. Plants that ELABORATE HERE *****
        </p>
      </div>
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center -space-x-3">
          <img
            alt="photo of a stem and leaves"
            src="./src/images/AboutBottom1.png"
            className="relative inline-block h-12 w-12 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
          />
        </div>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-right">
          “To plant a garden is to believe in tomorrow.”
          <br></br>
          -Audrey Hepburn
        </p>
      </div>
    </div>
  );
};

export default About;
