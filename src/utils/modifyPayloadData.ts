

// modify payload data to form data
export const modifyPayloadData = (values: any) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);

  return formData;
};
