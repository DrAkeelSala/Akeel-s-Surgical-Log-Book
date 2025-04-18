const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbx957PK8jWKmVffkbbS9fwf800mjuocomd0B2EF49TNN_1PFc1_rMjrvLKOb3Dcn02S/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          patientAge,
          gender,
          procedure,
          diagnosis,
          role,
          consultant,
          hospital,
        }),
      });
  
      if (response.ok) {
        alert("Submitted! ✅");
        // Optionally reset the form here
        setDate("");
        setPatientAge("");
        setGender("");
        setProcedure("");
        setDiagnosis("");
        setRole("");
        setConsultant("");
        setHospital("");
      } else {
        alert("Error submitting. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error submitting. Please try again.");
    }
  };
  