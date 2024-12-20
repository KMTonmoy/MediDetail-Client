const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-20 h-20 flex gap-2 items-center justify-center">
        <div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-green-500"></div>
        <div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-green-500"></div>
        <div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-green-500"></div>
      </div>
    </div>

  );
};
export default Loading;