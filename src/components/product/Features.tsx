
interface FeaturesProp {
  productData: any;
}

const Features = ({ productData }: FeaturesProp) => {
  const { features, included_items } = productData.attributes
  return (
    <div className="xl:flex items-start xl:gap-[125px]">
      <div className="mb-[88px] xl:w-[60%]">
        <h1 className="mb-6 text-[24px] font-bold md:mb-8 md:text-[32px]">
          FEATURES
        </h1>
        <p className="text-[15px] font-medium leading-[25px] opacity-50">
          {features}
        </p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-0 xl:w-[40%] xl:flex-col">
        <h1 className="text-[24px] font-bold md:flex-1 xl:mb-11">IN THE BOX</h1>
        <div className="md:flex-1">
          {included_items.data.map((product: any, index: number) => {
            return (
              <div key={index}>
                <span className="mr-6 text-[15px] font-bold text-red_orange-200">
                  {product.attributes.quantity}x
                </span>
                <span className="text-[15px] font-medium capitalize opacity-50">
                  {product.attributes.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
