import thankYouIllustration from './assets/images/illustration-thank-you.svg'

function ThankYou({ rating }) {
  return (
    <div className="flex flex-col items-center text-center py-4">
      <img src={thankYouIllustration} alt="Teşekkür illüstrasyonu" className="mb-8" />

      <div className="bg-[#262f38] text-[#fb7413] text-sm px-4 py-1.5 rounded-full mb-8">
        You selected {rating} out of 5
      </div>

      <h2 className="text-white text-2xl font-bold mb-3">
        Thank you!
      </h2>

      <p className="text-[#959eac] text-sm leading-relaxed">
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankYou