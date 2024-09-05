export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container h-14 text-gray-500 text-sm items-center flex justify-between">
        <p>
          &copy; <span id="year">{year}</span> Des Ektor
        </p>
        <p>
          Powerd by <a href="https://bit.ly/ahmed-mekawy">Ahmed Mekawy</a>
        </p>
      </div>
    </footer>
  );
};
