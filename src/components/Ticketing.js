import { useMemo, useState } from "react";
import {
  initialFormState,
  serviceOptions,
  staffDirectory,
} from "../data/ticketing";

export default function Ticketing() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Service sélectionné
  const activeService = useMemo(() => {
    return (
      serviceOptions.find((s) => s.id === formData.service) ||
      serviceOptions[0]
    );
  }, [formData.service]);

  // Équipe filtrée selon service
  const staffByService = useMemo(() => {
    return staffDirectory.filter(
      (m) => m.service === formData.service
    );
  }, [formData.service]);

  // Update form
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setIsSubmitted(false);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return {
    formData,
    isSubmitted,
    activeService,
    staffByService,
    handleChange,
    handleSubmit,
    serviceOptions,
  };
}