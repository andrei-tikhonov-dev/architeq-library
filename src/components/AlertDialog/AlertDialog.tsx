import React from "react";
import { css } from "@emotion/css";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import theme from "../../contstants/theme";
import { Button } from "../Button";

export interface AlertDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  cancelText?: string;
  actionText?: string;
  onCancel?: () => void;
  onAction?: () => void;
  variant?: "primary" | "destructive";
  children?: React.ReactNode;
  className?: string;
}

const getStyles = () => ({
  overlay: css`
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1000;

    @keyframes overlayShow {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  content: css`
    background-color: ${theme.colors.background.primary};
    border-radius: ${theme.border.radius.md};
    box-shadow: ${theme.shadows.md};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: ${theme.spacing.lg};
    animation: contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1001;

    @keyframes contentShow {
      from {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.6);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }

    &:focus {
      outline: none;
    }
  `,
  title: css`
    margin: 0;
    font-weight: 600;
    color: ${theme.colors.text.default};
    font-size: 18px;
    margin-bottom: ${theme.spacing.md};
    font-family: ${theme.fontFamily};
  `,
  description: css`
    margin-top: 0;
    margin-bottom: ${theme.spacing.lg};
    color: ${theme.colors.text.light};
    font-size: ${theme.typography.size.md};
    line-height: 1.5;
    font-family: ${theme.fontFamily};
  `,
  buttonGroup: css`
    display: flex;
    justify-content: flex-end;
    gap: ${theme.spacing.md};
    margin-top: ${theme.spacing.lg};
  `,
});

export function AlertDialog({
  isOpen,
  onOpenChange,
  title,
  description,
  cancelText = "Cancel",
  actionText = "Continue",
  onCancel,
  onAction,
  variant = "primary",
  children,
  className,
}: AlertDialogProps) {
  const styles = getStyles();

  const handleCancel = () => {
    onOpenChange(false);
    onCancel?.();
  };

  const handleAction = () => {
    onOpenChange(false);
    onAction?.();
  };

  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className={styles.overlay} />
        <AlertDialogPrimitive.Content
          className={css([styles.content, className])}
        >
          <AlertDialogPrimitive.Title className={styles.title}>
            {title}
          </AlertDialogPrimitive.Title>

          {description && (
            <AlertDialogPrimitive.Description className={styles.description}>
              {description}
            </AlertDialogPrimitive.Description>
          )}

          {children}

          <div className={styles.buttonGroup}>
            <AlertDialogPrimitive.Cancel asChild>
              <Button buttonStyle="outline" onClick={handleCancel}>
                {cancelText}
              </Button>
            </AlertDialogPrimitive.Cancel>

            <AlertDialogPrimitive.Action asChild>
              <Button
                variant={variant === "destructive" ? "destructive" : "primary"}
                onClick={handleAction}
              >
                {actionText}
              </Button>
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
