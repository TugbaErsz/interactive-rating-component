import { useState } from 'react'
import starIcon from './assets/images/icon-star.svg'
import thankYouIllustration from './assets/images/illustration-thank-you.svg'

function App() {
  const [selectedRating, setSelectedRating] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ratings = [1, 2, 3, 4, 5]

  function handleSubmit(e) {
    e.preventDefault()
    if (selectedRating !== null) {
      setIsSubmitted(true)
    }
  }

  return (
    <main className="min-h-screen bg-[#121417] flex items-center justify-center p-6 font-sans">
      <div className="bg-[#1e252f] max-w-[412px] w-full rounded-[30px] p-8 shadow-2xl">
        {!isSubmitted ? (
          /* 1. EKRAN: OYLAMA FORMU */
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
                  className={`w-12 h-12 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center ${selectedRating === rate
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
        ) : (
          /* 2. EKRAN: TEŞEKKÜR EKRANI (KOŞULLU RENDER) */
          <div className="flex flex-col items-center text-center py-4">
            <img src={thankYouIllustration} alt="Teşekkür illüstrasyonu" className="mb-8" />

            <div className="bg-[#262f38] text-[#fb7413] text-sm px-4 py-1.5 rounded-full mb-8">
              You selected {selectedRating} out of 5
            </div>

            <h2 className="text-white text-2xl font-bold mb-3">
              Thank you!
            </h2>

            <p className="text-[#959eac] text-sm leading-relaxed">
              We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default App