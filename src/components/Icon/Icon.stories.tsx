// @ts-ignore
import React from "react";
import { Icon, icons } from ".";

const iconNames = Object.keys(icons).sort();

export const AllIcons = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {iconNames.map((name: any) => (
        <div
          key={name}
          style={{
            textAlign: "center",
            padding: "40px 20px",
            width: "19%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <Icon name={name} size="sm" />
            <Icon name={name} size="md" />
            <Icon name={name} size="lg" />
          </div>
          <div style={{ fontSize: "16px", color: "#333" }}>{name}</div>
        </div>
      ))}
    </div>
  );
};

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "The name of the Icon",
      control: {
        type: "text",
      },
    },
    size: {
      description: "Size of the Icon",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
};
