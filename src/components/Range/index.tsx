import * as Slider from "@radix-ui/react-slider";
import { css } from "@emotion/css";
import React, { useState, useMemo } from "react";
import { useStyles2 } from "@grafana/ui";
import theme from "../../contstants/theme";
import { RangeProps } from "./types";

const getStyles = () => ({
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.md};
    width: 100%;
  `,
  labelsContainer: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
  label: css`
    font-size: ${theme.typography.size.sm};
    color: ${theme.colors.text.light};
  `,
  sliderRoot: css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 20px;
  `,
  track: css`
    position: relative;
    height: 4px;
    flex-grow: 1;
    background: ${theme.colors.background.secondary};
    border-radius: ${theme.border.radius.sm};
  `,
  range: css`
    position: absolute;
    height: 4px;
    background: ${theme.colors.iconButton.primary};
    border-radius: ${theme.border.radius.sm};
  `,
  thumb: css`
    width: 16px;
    height: 16px;
    background: ${theme.colors.iconButton.primary};
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid ${theme.colors.text.default};
    position: absolute;
    transform: translate(-50%, -50%);
  `,
});

export const Range: React.FC<RangeProps> = ({ items, onChange }) => {
  const styles = useStyles2(getStyles);
  const [range, setRange] = useState<[number, number]>([0, items.length - 1]);

  const handleChange = (values: number[]) => {
    if (values.length !== 2) {
      return;
    }
    // @ts-ignore
    setRange([values[0], values[1]]);
    // @ts-ignore
    onChange?.({ start: items[values[0]], end: items[values[1]] });
  };

  const labels = useMemo(
    () =>
      items.map((item) => (
        <span key={item.id} className={styles.label}>
          {item.name}
        </span>
      )),
    [items, styles.label]
  );

  return (
    <div className={styles.container}>
      <div className={styles.labelsContainer}>{labels}</div>
      <Slider.Root
        className={styles.sliderRoot}
        min={0}
        max={items.length - 1}
        step={1}
        value={range}
        onValueChange={handleChange}
      >
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
    </div>
  );
};
