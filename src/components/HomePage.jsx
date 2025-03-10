import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { quizData } from "../data/quizData";
import { getRandomQuestions } from "../utils/quizUtils";
import html2canvas from "html2canvas";

function HomePage() {
  const { logout } = useAuth();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const footerRef = useRef(null);
  const [slideDirection, setSlideDirection] = useState("");

  // Initialize random questions when component mounts
  useEffect(() => {
    setCurrentQuestions(getRandomQuestions(quizData, 10));
  }, []);

  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleOptionSelect = (optionId) => {
    setShowError(false);
    setSelectedOption(optionId);
    setShowExplanation(true);

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOption: optionId,
        correct: optionId === currentQuestion.correctAnswer,
      },
    ]);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      setShowError(true);
      return;
    }

    setShowError(false);
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
      setSlideDirection("sliding-out-left");
      setTimeout(() => {
        setSlideDirection("sliding-in-right");
      }, 300);
    } else if (!quizCompleted) {
      setQuizCompleted(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(null);
      setShowExplanation(false);
      setSlideDirection("sliding-out-right");
      setTimeout(() => {
        setSlideDirection("sliding-in-left");
      }, 300);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setUserAnswers([]);
    setQuizCompleted(false);
    // Get new random questions on retry
    setCurrentQuestions(getRandomQuestions(quizData, 10));
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentQuestion.code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Hide after 2 seconds
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const correctAnswers = userAnswers.filter((answer) => answer.correct).length;

  // Calculate progress percentage
  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

  // Add useEffect for footer height calculation
  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--footer-height",
          `${height}px`
        );
      }
    };

    // Initial calculation
    updateFooterHeight();

    // Add resize listener
    window.addEventListener("resize", updateFooterHeight);

    // Cleanup
    return () => window.removeEventListener("resize", updateFooterHeight);
  }, [quizCompleted]); // Recalculate when quiz completion status changes

  // Update the footer JSX to add ref
  const FooterComponent = () => (
    <footer className="developer-footer" ref={footerRef}>
      <div className="developer-info">
        <span>Developed with ❤️ by</span>
        <a
          href="https://github.com/abdullah-al-mridul/bangla-quiz-app"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-name"
        >
          আব্দুল্লাহ আল মৃদুল
          <svg
            className="github-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Bangla Quiz App. All rights reserved.
      </div>
    </footer>
  );

  const handleShare = async () => {
    const scoreDisplay = document.querySelector(".score-display");

    try {
      // Create a clone of just the score display
      const clone = scoreDisplay.cloneNode(true);

      // Create a wrapper with exact styling
      const wrapper = document.createElement("div");
      wrapper.style.position = "fixed";
      wrapper.style.left = "0";
      wrapper.style.top = "0";
      wrapper.style.width = "100%";
      wrapper.style.height = "100%";
      wrapper.style.backgroundColor = "#0f172a";
      wrapper.style.padding = "2rem";
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";
      wrapper.style.justifyContent = "center";
      wrapper.style.zIndex = "-1";

      // Add congratulations text
      const congratsText = document.createElement("h1");
      congratsText.textContent = "অভিনন্দন! 🎉";
      congratsText.style.color = "#0ea5e9";
      congratsText.style.marginBottom = "1.5rem";
      congratsText.style.fontSize = "2rem";
      congratsText.style.textAlign = "center";

      // Create inner container
      const container = document.createElement("div");
      container.style.background = "#1e293b";
      container.style.padding = "2rem";
      container.style.borderRadius = "1rem";
      container.style.maxWidth = "500px";
      container.style.width = "100%";
      container.style.textAlign = "center";

      // Style the clone
      clone.style.margin = "0";
      clone.style.background = "#0f172a";
      clone.style.animation = "none";
      clone.style.transform = "none";
      clone.style.border = "2px solid #334155";
      clone.style.borderRadius = "1rem";
      clone.style.padding = "2rem";

      // Fix score visibility
      const scoreElement = clone.querySelector(".score-percentage");
      if (scoreElement) {
        scoreElement.style.color = isPerfectScore ? "#22c55e" : "#0ea5e9";
        scoreElement.style.fontSize = isPerfectScore ? "4.5rem" : "4rem";
        scoreElement.style.fontWeight = "bold";
        scoreElement.style.margin = "1rem 0";
        scoreElement.style.opacity = "1";
        scoreElement.style.animation = "none";
        scoreElement.style.background = "none";
        scoreElement.style.webkitTextFillColor = "initial";
      }

      // Fix text color
      const textElement = clone.querySelector("p");
      if (textElement) {
        textElement.style.color = "#94a3b8";
        textElement.style.fontSize = "1.1rem";
        textElement.style.marginBottom = "1rem";
      }

      // Assemble the elements
      container.appendChild(congratsText);
      container.appendChild(clone);
      wrapper.appendChild(container);
      document.body.appendChild(wrapper);

      // Capture with html2canvas
      const canvas = await html2canvas(container, {
        backgroundColor: "#1e293b",
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      // Convert to image
      const image = canvas.toDataURL("image/png", 1.0);

      // Create download link
      const link = document.createElement("a");
      link.download = "quiz-result.png";
      link.href = image;
      link.click();

      // Clean up
      document.body.removeChild(wrapper);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  // Add touch event handling for buttons
  const handleTouchStart = (e) => {
    e.currentTarget.style.transform = "scale(0.98)";
  };

  const handleTouchEnd = (e) => {
    e.currentTarget.style.transform = "none";
  };

  const isPerfectScore = correctAnswers === currentQuestions.length;

  if (quizCompleted) {
    return (
      <div>
        <div className="quiz-container quiz-container-completed">
          <div
            className={`completion-screen ${
              isPerfectScore ? "perfect-score" : ""
            }`}
          >
            <h1>অভিনন্দন! 🎉</h1>
            <div className="score-display">
              <p>
                আপনি {currentQuestions.length}টি প্রশ্নের মধ্যে {correctAnswers}
                টি সঠিক উত্তর দিয়েছেন
              </p>
              <div className="score-percentage">
                {Math.round((correctAnswers / currentQuestions.length) * 100)}%
              </div>
            </div>
            <div className="completion-buttons">
              <button className="retry-button" onClick={handleRetry}>
                আবার চেষ্টা করুন
              </button>
              <button className="share-button" onClick={handleShare}>
                <svg
                  className="share-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
                ফলাফল শেয়ার করুন
              </button>
              <button className="logout-button" onClick={logout}>
                লগ আউট
              </button>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }

  // Early return if questions haven't been loaded yet
  if (!currentQuestion) {
    return (
      <div className="quiz-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${quizCompleted ? 100 : progress}%`,
            backgroundColor: quizCompleted ? "#22c55e" : "#0ea5e9",
          }}
        />
      </div>

      <div className="quiz-header">
        <div className="question-counter">
          <span className="current">{currentQuestionIndex + 1}</span>
          <span className="separator">/</span>
          <span className="total">{currentQuestions.length}</span>
          <span className="text">প্রশ্ন</span>
        </div>
        <button className="logout-button" onClick={logout}>
          লগ আউট
        </button>
      </div>

      <div className={`question-section ${slideDirection}`}>
        <h2 className="question-title">{currentQuestion.question}</h2>
        <p className="question-description">{currentQuestion.description}</p>

        <div className="code-block">
          <button
            className="copy-button"
            onClick={handleCopyCode}
            title={copySuccess ? "কপি করা হয়েছে!" : "কপি করুন"}
          >
            {copySuccess ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <pre>
            <code>{currentQuestion.code}</code>
          </pre>
        </div>

        <div className="options-container">
          {showError && (
            <div className="error-message">
              দয়া করে একটি উত্তর নির্বাচন করুন!
            </div>
          )}
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              className={`option-button ${
                selectedOption === option.id
                  ? option.id === currentQuestion.correctAnswer
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option.id)}
              disabled={showExplanation}
            >
              {option.text}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div
            className={`explanation ${
              selectedOption === currentQuestion.correctAnswer
                ? "correct"
                : "wrong"
            }`}
          >
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="navigation-buttons">
          <button
            className="nav-button"
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
          >
            আগের প্রশ্ন
          </button>
          <button
            className="nav-button"
            onClick={handleNextQuestion}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {currentQuestionIndex === currentQuestions.length - 1
              ? "কুইজ শেষ করুন"
              : "পরের প্রশ্ন"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
