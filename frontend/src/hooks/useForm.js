import React, { useState } from "react";

const useForm = defaultState => {
  const [form, setForm] = useState(defaultState);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return [form, handleChange];
};

export { useForm };
