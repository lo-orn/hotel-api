import { ActionButton } from "./buttons/ActionButton";

export default function QuickActionSection() {
  return (
    <div className="grid grid-cols-2 h-80 gap-y-4">
      <div className="bg-stone p-10 flex items-center justify-center gap-4">
        <ActionButton label="+ Ny bokning" />
        <ActionButton label="+ Ny gäst" />
      </div>

    
        <img
          className="object-cover w-full h-full min-h-0"
          src="https://images.unsplash.com/photo-1535542767117-80f7ebd0f082"
          alt="närfotad bild av säng och fönster i varmt ljus"
        ></img>
    
    </div>
  );
}
