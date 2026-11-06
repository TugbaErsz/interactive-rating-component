import starIcon from './assets/images/icon-star.svg'

function RatingForm({ selectedRating, setSelectedRating, onFormSubmit }) {
  const ratings = [1, 2, 3, 4, 5]

  function handleSubmit(e) {
    e.preventDefault()
    if (selectedRating !== null) {
      onFormSubmit()
    }
  }

  return (
    <div>
      <div className="w-12 h-12 bg-[#262f38] rounded-full flex items-center justify-center mb-7">
        <img src={starIcon} alt="Yıldız ikonu" className="w-4 h-4" />
      </div>

      <h1 className="text-white text-2xl font-bold mb-3">
        How did we do?
      </h1>

      <p className="text-[#959eac] text-sm leading-relaxed mb-6">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>

      {/* Puan Butonları */}
      <div className="flex justify-between items-center mb-8">
        {ratings.map((rate) => (
          <button
            key={rate}
            type="button"
            onClick={() => setSelectedRating(rate)}
            className={`w-12 h-12 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center ${
              selectedRating === rate
                ? 'bg-[#fb7413] text-white'
                : 'bg-[#262f38] text-[#7c8798] hover:bg-[#7c8798] hover:text-white'
            }`}
          >
            {rate}
          </button>
        ))}
      </div>

      {/* Submit Butonu */}
      <button
        onClick={handleSubmit}
        disabled={selectedRating === null}
        className="w-full bg-[#fb7413] hover:bg-white text-white hover:text-[#fb7413] font-bold py-3.5 rounded-full uppercase tracking-[2px] text-sm transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </div>
  )
}

export default RatingForm