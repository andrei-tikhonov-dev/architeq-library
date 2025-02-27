import React, { useEffect, useRef } from "react";
import { css } from "@emotion/css";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import theme from "../../contstants/theme";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

export interface ModalProps {
  /**
   * Controls whether the modal is open
   */
  isOpen: boolean;
  /**
   * Callback fired when the open state changes
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Modal title
   */
  title: string;
  /**
   * Optional description text
   */
  description?: string;
  /**
   * Text for the cancel button
   */
  cancelText?: string;
  /**
   * Text for the action button
   */
  actionText?: string;
  /**
   * Callback fired when the cancel button is clicked
   */
  onCancel?: () => void;
  /**
   * Callback fired when the action button is clicked
   */
  onAction?: () => void;
  /**
   * Style variant for the action button
   */
  variant?: "primary" | "secondary" | "destructive";
  /**
   * Custom content to render inside the modal
   */
  children?: React.ReactNode;
  /**
   * Additional CSS class for the modal content
   */
  className?: string;
  /**
   * Whether to show the close button in the top-right corner
   */
  showCloseButton?: boolean;
  /**
   * Whether to close the modal when clicking outside
   */
  closeOnOutsideClick?: boolean;
  /**
   * Whether to close the modal when pressing Escape
   */
  closeOnEscape?: boolean;
  /**
   * Modal size
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * Whether to show action buttons
   */
  showActions?: boolean;
  /**
   * Whether the modal is centered vertically
   */
  centered?: boolean;
  /**
   * Additional CSS class for the overlay
   */
  overlayClassName?: string;
}

const getStyles = (size?: ModalProps["size"], centered?: boolean) => {
  const maxWidthMap = {
    sm: "400px",
    md: "500px",
    lg: "600px",
    xl: "800px",
    full: "90vw",
  };

  return {
    overlay: css`
      background-color: ${theme.colors.background.overlay};
      position: fixed;
      inset: 0;
      animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1000;
      display: flex;
      align-items: ${centered ? "center" : "flex-start"};
      justify-content: center;
      overflow-y: auto;
      padding: ${centered ? "0" : "48px 0"};

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
      position: ${centered ? "fixed" : "relative"};
      ${centered
        ? `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `
        : ""}
      width: 90vw;
      max-width: ${maxWidthMap[size || "md"]};
      max-height: ${centered ? "85vh" : "none"};
      padding: ${theme.spacing.lg};
      animation: contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1001;
      overflow: ${centered ? "auto" : "visible"};

      @keyframes contentShow {
        from {
          opacity: 0;
          transform: ${centered
            ? "translate(-50%, -48%) scale(0.96)"
            : "translateY(-8px) scale(0.98)"};
        }
        to {
          opacity: 1;
          transform: ${centered
            ? "translate(-50%, -50%) scale(1)"
            : "translateY(0) scale(1)"};
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
      padding-right: 24px;
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
    closeButton: css`
      position: absolute;
      top: 16px;
      right: 16px;
      padding: 4px;
      border-radius: 50%;
      color: ${theme.colors.text.light};
      background: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: ${theme.colors.background.secondary};
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${theme.colors.background.secondary};
      }
    `,
    headerWrapper: css`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    `,
  };
};

export function Modal({
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
  showCloseButton = true,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  size = "md",
  showActions = true,
  centered = true,
  overlayClassName,
}: ModalProps) {
  const styles = getStyles(size, centered);
  const initialFocusRef = useRef<HTMLButtonElement>(null);

  const handleCancel = () => {
    onOpenChange(false);
    onCancel?.();
  };

  const handleAction = () => {
    onOpenChange(false);
    onAction?.();
  };

  useEffect(() => {
    if (isOpen && initialFocusRef.current) {
      setTimeout(() => {
        initialFocusRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <DialogPrimitive.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open || closeOnOutsideClick) {
          onOpenChange(open);
        }
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={css([styles.overlay, overlayClassName])}
        />
        <DialogPrimitive.Content
          className={css([styles.content, className])}
          onEscapeKeyDown={(event) => {
            if (!closeOnEscape) {
              event.preventDefault();
            }
          }}
          onPointerDownOutside={(event) => {
            if (!closeOnOutsideClick) {
              event.preventDefault();
            }
          }}
          onInteractOutside={(event) => {
            if (!closeOnOutsideClick) {
              event.preventDefault();
            }
          }}
        >
          <div className={styles.headerWrapper}>
            <DialogPrimitive.Title className={styles.title}>
              {title}
            </DialogPrimitive.Title>

            {showCloseButton && (
              <DialogPrimitive.Close asChild>
                <IconButton name="CloseSmall" />
              </DialogPrimitive.Close>
            )}
          </div>

          {description && (
            <DialogPrimitive.Description className={styles.description}>
              {description}
            </DialogPrimitive.Description>
          )}

          {children}

          {showActions && (
            <div className={styles.buttonGroup}>
              <Button
                buttonStyle="outline"
                onClick={handleCancel}
                ref={initialFocusRef}
              >
                {cancelText}
              </Button>

              <Button variant={variant} onClick={handleAction}>
                {actionText}
              </Button>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
