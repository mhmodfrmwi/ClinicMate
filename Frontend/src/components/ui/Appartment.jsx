const Appartment = ({ image, title }) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2">
      <div className="glass flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 shadow-lg transition-shadow group-hover:shadow-blue-500/30 dark:bg-slate-800">
        <img src={image} alt={title} className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {title}
      </p>
    </div>
  );
};
export default Appartment;
