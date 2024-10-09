
interface ImgData{
    imgStr:string,
    
}
const BrandItems = ({imgStr}:ImgData) => {
  return (
    <div className="scroll-item px-10 w-80 shrink-0">
        <img
          src={imgStr}
          alt="img"
        />
      </div>
  )
}

export default BrandItems