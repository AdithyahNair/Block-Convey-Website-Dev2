import React from "react";

export const FinancialModelSection: React.FC = () => {
  // Feature cards
  const features = [
    {
      title: "Fairness Analysis",
      icon: "⚖️",
      description:
        "Ensure equal treatment across demographic segments and eliminate bias in financial decisions",
      gradient: "bg-cyan-400",
    },
    {
      title: "Risk Detection",
      icon: "🔍",
      description:
        "Identify potential risks in your models with advanced anomaly detection algorithms",
      gradient: "bg-blue-500/90",
    },
    {
      title: "Compliance Shield",
      icon: "🛡️",
      description:
        "Stay compliant with ISO, ECCOA, GDPR and other financial regulatory requirements",
      gradient: "bg-teal-500",
    },
  ];

  const noAnimationStyle = {
    transform: "none",
    perspective: "none",
    transition: "none",
    animation: "none",
  };

  return (
    <div className="w-full bg-white py-16 md:py-24" style={noAnimationStyle}>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={noAnimationStyle}
      >
        {/* Main content */}
        <div className="relative z-10" style={noAnimationStyle}>
          {/* Title and subtitle */}
          <div className="text-center mb-16" style={noAnimationStyle}>
            <h2
              className="text-2xl md:text-3xl font-medium text-gray-700 mb-2"
              style={noAnimationStyle}
            >
              Single-Platform Assessment for Your
            </h2>
            <h1
              className="text-4xl md:text-5xl font-bold text-teal-500 mb-8"
              style={noAnimationStyle}
            >
              Financial Models
            </h1>

            {/* Progress line */}
            <div
              className="relative h-1 w-full max-w-xl mx-auto mb-14"
              style={noAnimationStyle}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-teal-200 to-teal-200 h-[2px]"
                style={noAnimationStyle}
              ></div>

              {[0, 33, 66, 100].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-teal-500"
                  style={{
                    left: `${pos}%`,
                    top: "-3px",
                    transform: "translateX(-50%)",
                    transition: "none",
                    animation: "none",
                  }}
                />
              ))}
            </div>

            <p
              className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
              style={noAnimationStyle}
            >
              Consolidate real-time detection of fairness issues, bias, and
              model drift to maintain optimal performance. Ensure compliance
              with ISO, ECCOA, and GDPR
              <span
                className="text-teal-600 font-medium"
                style={noAnimationStyle}
              >
                {" "}
                —all in one enterprise-grade tool.
              </span>
            </p>
          </div>

          {/* Feature cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10"
            style={noAnimationStyle}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden h-full"
                style={noAnimationStyle}
              >
                {/* Card background */}
                <div
                  className={`absolute inset-0 ${feature.gradient}`}
                  style={noAnimationStyle}
                />

                {/* Card content */}
                <div
                  className="relative z-10 p-6 text-white h-full flex flex-col min-h-[200px]"
                  style={noAnimationStyle}
                >
                  <div className="mb-2 text-2xl" style={noAnimationStyle}>
                    {feature.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={noAnimationStyle}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-white/90 text-sm leading-relaxed"
                    style={noAnimationStyle}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
