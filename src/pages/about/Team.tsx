import React from "react";

interface IProps {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
  socialLinks: any;
}

const TeamMemberCard = ({
  name,
  role,
  socialLinks,
  imageSrc,
  description,
}: IProps) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 relative transition-all h-[300px] ${
        hovered ? "hover:bg-appYellow200" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imageSrc} alt={name} className="w-32 h-32 rounded-full mb-4" />
      <div className="text-xl font-medium mb-2">{name}</div>
      <div className="text-gray-500 text-sm mb-4">{role}</div>
      {hovered && (
        <div className="absolute inset-0 bg-appYellow200  z-10 rounded-lg flex items-center justify-center">
          <div className="text-white font-bold text-center p-4">
            <p className="mb-2">{description}</p>
            <div className="flex justify-center">
              {socialLinks.map((link:any) => (
                <a
                  href={link.url}
                  key={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 text-gray-300 hover:text-white"
                >
                  {/* <img src={link.icon} aria-hidden="true"></img> */}
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
