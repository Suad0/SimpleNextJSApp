"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function KundenPage() {
  const [kunden, setKunden] = useState([]);

  useEffect(() => {
    const fetchKunden = async () => {
      try {
        const response = await axios.get("http://localhost:9000/kunden");
        setKunden(response.data.kunden);
        console.log(response);
      } catch (error) {
        console.error("Error fetching kunden:", error);
      }
    };

    fetchKunden();
  }, []);

  return (
    <div className="lg:grid-cols-2 xl:grid-cols-4">
      <DataTable value={kunden}>
        <Column field="Name" header="Name"></Column>
        <Column field="Telefon" header="Telefon"></Column>
        <Column field="Email" header="Email"></Column>
      </DataTable>
    </div>
  );
}

export default KundenPage;
