export const Header = ({ subHeading, heading }) => {
  return (
    <>
      <h1 className="text-center text-4xl font-medium capitalize">{heading}</h1>
      <p className="text-center text-xl mt-4 capitalize text-cyan-700">
        {subHeading}
      </p>
    </>
  );
};
