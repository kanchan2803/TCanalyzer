import React, { useEffect, useState } from "react";
import { getHistoryApi } from "../services/api";
import { useAuth } from "../context/authContext";
import HistoryList from "../components/history/HistoryList";
import HistoryDetail from "../components/history/HistoryDetail";
import EmptyHistory from "../components/history/EmptyHistory";
import Loader from "../components/layouts/Loader";

const HistoryPage = () => {
  const { isLoggedIn } = useAuth();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHistory, setSelectedHistory] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getHistoryApi();
        setHistory(Array.isArray(res) ? res : []);
      } catch (err) {
        console.error("Error fetching history:", err);
        setHistory([]);
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn) fetchHistory();
    else setLoading(false);
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold">Please login to view history</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Analysis History</h1>

      {loading ? (
        <Loader />
      ) : history.length === 0 ? (
        <EmptyHistory />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 border-r pr-4">
            <HistoryList history={history} onSelect={setSelectedHistory} />
          </div>
          <div className="md:col-span-2">
            {selectedHistory ? (
              <HistoryDetail item={selectedHistory} />
            ) : (
              <p className="text-gray-500 text-center mt-10">
                Select an analysis to view details
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
