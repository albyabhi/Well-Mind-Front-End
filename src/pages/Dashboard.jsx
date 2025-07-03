import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loadingStatusId, setLoadingStatusId] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchAppointments = async () => {
    try {
      const response = await fetch(`${API_URL}/api/fetch`);
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("❌ Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const toggleStatus = async (id, currentStatus) => {
    const newStatus =
      currentStatus === "attended" ? "not attended" : "attended";
    setLoadingStatusId(id);

    try {
      const response = await fetch(`${API_URL}/api/appointments/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();
      console.log("✅ Status updated:", result);

      await fetchAppointments();
      alert(`Status updated to ${newStatus}`);
    } catch (error) {
      console.error("❌ Error updating status:", error);
    } finally {
      setLoadingStatusId(null);
    }
  };

  // Utility: Format to Google Calendar Date Format
  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const getOneHourLater = (dateStr) => {
    const date = new Date(dateStr);
    date.setHours(date.getHours() + 1);
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  // Filter by selected date
  const filteredAppointments = selectedDate
    ? appointments.filter((apt) => {
        const aptDate = new Date(apt.date).toISOString().split("T")[0];
        return aptDate === selectedDate;
      })
    : appointments;

  return (
    <div className="flex justify-center items-center px-4 bg-[#fdf5f9] min-h-screen">
      <section className="w-full max-w-5xl px-6 md:px-16 py-10 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c5e] mb-6">
          Appointment Dashboard
        </h2>

        {/* Date Filter */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Filter by Date:
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-1/3"
          />
          {selectedDate && (
            <button
              onClick={() => setSelectedDate("")}
              className="ml-3 text-sm text-blue-600 underline"
            >
              Clear Filter
            </button>
          )}
        </div>

        {filteredAppointments.length === 0 ? (
          <p className="text-gray-500 text-lg">No appointments found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAppointments.map((apt) => (
              <div
                key={apt._id}
                className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#2c2c5e] mb-1">
                    {apt.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{apt.help}</p>

                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-800">Contact:</span>{" "}
                    {apt.contact}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Date:</span>{" "}
                    {new Date(apt.date).toLocaleDateString("en-GB")}
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-800">Status:</span>{" "}
                    <b>{apt.status}</b>
                  </p>
                </div>

                <div className="mt-5 space-y-2">
                  {/* Toggle Status Button */}
                  <button
                    onClick={() => toggleStatus(apt._id, apt.status)}
                    disabled={loadingStatusId === apt._id}
                    className={`w-full py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex justify-center items-center gap-2 ${
                      apt.status === "attended"
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-red-500 hover:bg-red-600 text-white"
                    } ${
                      loadingStatusId === apt._id
                        ? "opacity-70 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {loadingStatusId === apt._id ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Updating...
                      </>
                    ) : apt.status === "attended" ? (
                      "Mark as Not Attended"
                    ) : (
                      "Mark as Attended"
                    )}
                  </button>

                  {/* Google Calendar Button */}
                  {/* Show only if NOT attended */}
                  {apt.status !== "attended" && (
                    <a
                      href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        apt.name + " - Appointment"
                      )}&dates=${formatDateTime(apt.date)}/${getOneHourLater(
                        apt.date
                      )}&details=${encodeURIComponent(
                        apt.help
                      )}&location=${encodeURIComponent(
                        "Phone: " + apt.contact
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-sm"
                    >
                      Set Reminder
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
