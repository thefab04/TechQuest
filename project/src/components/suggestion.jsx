import React, { useEffect, useState } from "react";

const Suggestion = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "comment",
  });

  const [feedbackList, setFeedbackList] = useState([]);

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://techquest-backend.onrender.com/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your feedback!");
        console.log("Feedback submitted successfully");
        setFormData({ name: "", email: "", message: "", type: "comment" });
        fetchFeedback();
      } else {
        const errorData = await response.json();
        console.error("Error submitting feedback:", errorData);
        alert("Failed to submit feedback: " + errorData.message);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Error submitting feedback: " + error.message);
    }
  };

  // load feedback list
  const fetchFeedback = async () => {
    try {
      const res = await fetch("https://techquest-backend.onrender.com/api/feedback");
      if (res.ok) {
        const data = await res.json();
        setFeedbackList(data);
        console.log("Fetched feedback:", data);
      } else {
        console.error("Error fetching feedback:", res.statusText);
      }
    } catch (error) {
      console.error("Error loading feedback:", error);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
      <h2 id="role-heading">
         Share Your Thoughts
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="inputbox"
          required
        />
<br /><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email (optional)"
          className="inputbox"
        />
<br /><br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your comment or suggestion..."
          className="inputbox"
          required
        ></textarea>
<br /><br />
        {/* ✅ Radio buttons instead of dropdown */}
        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="comment"
              checked={formData.type === "comment"}
              onChange={handleChange}
            />
            <span>Comment</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="suggestion"
              checked={formData.type === "suggestion"}
              onChange={handleChange}
            />
            <span>Suggestion</span>
          </label>
        </div>
<br />

        <button
          type="submit"
          className="animated-button1"
        >
          Submit
        </button>
      </form>
<br /><br /><br />
      <div className="glass">
        <h3 id="role-heading" > Recent Feedback</h3>
        {feedbackList.length === 0 ? (
          <p className="text-gray-500">No feedback yet.</p>
        ) : (
          feedbackList
          .slice(-3)
          .reverse()
          .map((f) => (
            <div
              key={f._id}
              className="border p-3 rounded-lg mb-2 bg-gray-50 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <strong>{f.name}</strong>
                <span className="text-sm text-gray-500">({f.type})</span>
              </div>
              <p className="mt-1">{f.message}</p>
              <small className="text-gray-400 text-xs">
                {new Date(f.createdAt).toLocaleString()}
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Suggestion;
