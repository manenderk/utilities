import { Select } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React, { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

const timezones = Intl.supportedValuesOf("timeZone");
const userTimezone = dayjs.tz.guess();
const dtStr = new Date().toISOString().split("T")[0];

const TimezoneConverter = () => {
  const getSelectedTimezone = () => {
    const stored = localStorage.getItem("selectedTimezones");
    if (stored) {
      return JSON.parse(stored);
    }
    return [userTimezone];
  };

  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState(null);
  const [selectedTimezones, setSelectedTimezones] = useState(
    getSelectedTimezone()
  );

  useEffect(() => {
    localStorage.setItem(
      "selectedTimezones",
      JSON.stringify(selectedTimezones)
    );
  }, [selectedTimezones]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="row py-3">
        <div className="col-md-12">
          <h2 className="mb-3">Timezone Converter</h2>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 col-lg-4 d-flex align-items-center mb-2">
              <Select
                data={timezones}
                placeholder="Select Timezone"
                searchable
                style={{
                  flexGrow: 1,
                  marginRight: "10px",
                }}
                value={selectedTimezone}
                onChange={(value) => {
                  setSelectedTimezone(value);
                }}
              />

              <button
                className="btn btn-secondary"
                onClick={() => {
                  if (
                    selectedTimezone &&
                    !selectedTimezones.includes(selectedTimezone)
                  ) {
                    setSelectedTimezones([
                      ...selectedTimezones,
                      selectedTimezone,
                    ]);
                  }
                }}
              >
                Add
              </button>
            </div>
            <div className="col-md-6 col-lg-8 text-end mb-2">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedTime(new Date());
                }}
              >
                <i className="fa fa-refresh"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {selectedTimezones.map((timezone) => {
          return (
            <div className="col-md-6 col-lg-4" key={timezone}>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>{timezone}</h5>
                    <button
                      className="btn btn-link"
                      onClick={() => {
                        setSelectedTimezones(
                          selectedTimezones.filter((t) => t !== timezone)
                        );
                      }}
                    >
                      <i className="fa fa-trash mb-2 text-white"></i>
                    </button>
                  </div>
                  <TimeInput
                    value={dayjs(selectedTime).tz(timezone).format("HH:mm")}
                    onChange={(e) => {
                      const value = e.currentTarget.value;
                      const newTime = dayjs
                        .tz(`${dtStr}T${value}:00`, timezone)
                        .toDate();
                      setSelectedTime(newTime);
                    }}
                    style={{ height: "38px" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimezoneConverter;
