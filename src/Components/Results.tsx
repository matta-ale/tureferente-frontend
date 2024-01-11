const Results = (props: { quantity: number }) => {
  const { quantity } = props;
  return (
    <div className='bg-white absolute -top-28 bottom-0 left-6 w-full  rounded-tl-xl z-10'>
      {quantity}
    </div>
  );
};

export default Results;
