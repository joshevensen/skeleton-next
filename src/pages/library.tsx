import Layout from "@/layout/Layout";
import LibButton from "@/library/components/Button";
import LibCard from "@/library/components/Card";
import LibNotification, {
  NotificationTypeEnum,
} from "@/library/components/Notification";
import { ButtonColors, ButtonSizes, ButtonTypes } from "@/library/enums";
import libConfig from "@/library/lib.config";
import { useState } from "react";

export default function LibraryPage() {
  const headingClasses = "text-xl font-bold";
  const wrapperClasses = "flex items-center flex-wrap space-x-4 mt-1";

  const [showNotification, setShowNotification] = useState(false);
  function showNotificationToast() {
    setShowNotification(true);
  }

  return (
    <Layout>
      <div className="space-y-6">
        <LibCard heading="Buttons" isCollapsible defaultCollapsed>
          <div className="space-y-4">
            {/**
             * Solid Buttons
             */}
            <div>
              <h2 className={headingClasses}>Solid</h2>

              <div className={wrapperClasses}>
                <LibButton isFullWidth>Full Width</LibButton>
              </div>
              <div className={wrapperClasses}>
                <LibButton>Primary</LibButton>
                <LibButton color={ButtonColors.Secondary}>Secondary</LibButton>
                <LibButton color={ButtonColors.Light}>Light</LibButton>
                <LibButton isLoading>Loading</LibButton>
                <LibButton size={ButtonSizes.Small}>Small</LibButton>
                <LibButton size={ButtonSizes.Large}>Large</LibButton>
              </div>
              <div className={wrapperClasses}>
                <LibButton isDisabled>Primary</LibButton>
                <LibButton color={ButtonColors.Secondary} isDisabled>
                  Secondary
                </LibButton>
                <LibButton color={ButtonColors.Light} isDisabled>
                  Light
                </LibButton>
                <LibButton isLoading isDisabled>
                  Loading
                </LibButton>
                <LibButton size={ButtonSizes.Small} isDisabled>
                  Small
                </LibButton>
                <LibButton size={ButtonSizes.Large} isDisabled>
                  Large
                </LibButton>
              </div>
            </div>

            {/**
             * Outline Buttons
             */}
            <div>
              <h2 className={headingClasses}>Outline</h2>

              <div className={wrapperClasses}>
                <LibButton type={ButtonTypes.Outline} isFullWidth>
                  Full Width
                </LibButton>
              </div>
              <div className={wrapperClasses}>
                <LibButton type={ButtonTypes.Outline}>Primary</LibButton>
                <LibButton
                  type={ButtonTypes.Outline}
                  color={ButtonColors.Secondary}
                >
                  Secondary
                </LibButton>
                <LibButton
                  type={ButtonTypes.Outline}
                  color={ButtonColors.Light}
                >
                  Light
                </LibButton>
                <LibButton type={ButtonTypes.Outline} isLoading>
                  Loading
                </LibButton>
                <LibButton type={ButtonTypes.Outline} size={ButtonSizes.Small}>
                  Small
                </LibButton>
                <LibButton type={ButtonTypes.Outline} size={ButtonSizes.Large}>
                  Large
                </LibButton>
              </div>
              <div className={wrapperClasses}>
                <LibButton type={ButtonTypes.Outline} isDisabled>
                  Primary
                </LibButton>
                <LibButton
                  type={ButtonTypes.Outline}
                  color={ButtonColors.Secondary}
                  isDisabled
                >
                  Secondary
                </LibButton>
                <LibButton
                  type={ButtonTypes.Outline}
                  color={ButtonColors.Light}
                  isDisabled
                >
                  Light
                </LibButton>
                <LibButton type={ButtonTypes.Outline} isLoading isDisabled>
                  Loading
                </LibButton>
                <LibButton
                  type={ButtonTypes.Outline}
                  size={ButtonSizes.Small}
                  isDisabled
                >
                  Small
                </LibButton>
                <LibButton
                  type={ButtonTypes.Outline}
                  size={ButtonSizes.Large}
                  isDisabled
                >
                  Large
                </LibButton>
              </div>
            </div>

            {/**
             * Text Buttons
             */}
            <div>
              <h2 className={headingClasses}>Text</h2>
              <div className={wrapperClasses}>
                <LibButton type={ButtonTypes.Text}>Primary</LibButton>
                <LibButton
                  type={ButtonTypes.Text}
                  color={ButtonColors.Secondary}
                >
                  Secondary
                </LibButton>
                <LibButton type={ButtonTypes.Text} color={ButtonColors.Light}>
                  Light
                </LibButton>
                <LibButton type={ButtonTypes.Text} isLoading>
                  Loading
                </LibButton>
                <LibButton type={ButtonTypes.Text} size={ButtonSizes.Small}>
                  Small
                </LibButton>
                <LibButton type={ButtonTypes.Text} size={ButtonSizes.Large}>
                  Large
                </LibButton>
              </div>
              <div className={wrapperClasses}>
                <LibButton type={ButtonTypes.Text} isDisabled>
                  Primary
                </LibButton>
                <LibButton
                  type={ButtonTypes.Text}
                  color={ButtonColors.Secondary}
                  isDisabled
                >
                  Secondary
                </LibButton>
                <LibButton
                  type={ButtonTypes.Text}
                  color={ButtonColors.Light}
                  isDisabled
                >
                  Light
                </LibButton>
                <LibButton type={ButtonTypes.Text} isLoading isDisabled>
                  Loading
                </LibButton>
                <LibButton
                  type={ButtonTypes.Text}
                  size={ButtonSizes.Small}
                  isDisabled
                >
                  Small
                </LibButton>
                <LibButton
                  type={ButtonTypes.Text}
                  size={ButtonSizes.Large}
                  isDisabled
                >
                  Large
                </LibButton>
              </div>
            </div>

            {/**
             * Icon Buttons
             */}
            <div>
              <h2 className={headingClasses}>Icon</h2>

              <div className={wrapperClasses}>
                <LibButton
                  type={ButtonTypes.Icon}
                  iconPath={libConfig.icons.Home}
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  color={ButtonColors.Secondary}
                  iconPath={libConfig.icons.Home}
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  color={ButtonColors.Light}
                  iconPath={libConfig.icons.Home}
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  iconPath={libConfig.icons.Home}
                  isLoading
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  iconPath={libConfig.icons.Home}
                  size={ButtonSizes.Small}
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  iconPath={libConfig.icons.Home}
                  size={ButtonSizes.Large}
                />
              </div>
              <div className={wrapperClasses}>
                <LibButton
                  type={ButtonTypes.Icon}
                  iconPath={libConfig.icons.Home}
                  isDisabled
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  color={ButtonColors.Secondary}
                  iconPath={libConfig.icons.Home}
                  isDisabled
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  color={ButtonColors.Light}
                  iconPath={libConfig.icons.Home}
                  isDisabled
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  iconPath={libConfig.icons.Home}
                  isLoading
                  isDisabled
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  iconPath={libConfig.icons.Home}
                  size={ButtonSizes.Small}
                  isDisabled
                />
                <LibButton
                  type={ButtonTypes.Icon}
                  iconPath={libConfig.icons.Home}
                  size={ButtonSizes.Large}
                  isDisabled
                />
              </div>
            </div>
          </div>
        </LibCard>

        <LibCard heading="Notifications" isCollapsible>
          <div className="space-y-4">
            <LibButton onClick={showNotificationToast}>
              Show Notification Toast
            </LibButton>
            <LibNotification
              message="Notification Shown"
              type={NotificationTypeEnum.Success}
              hide={!showNotification}
              isToast
              showClose
              autoClose
            />

            <LibNotification message="Just incase you want to know this is a really long bit of text so I can see how it will work" />
            <LibNotification
              message="Something Went Wrong"
              type={NotificationTypeEnum.Error}
              showClose
            />
            <LibNotification
              message="Missing Post Title"
              type={NotificationTypeEnum.Warning}
            />
            <LibNotification
              message="Post Created"
              type={NotificationTypeEnum.Success}
            />
          </div>
        </LibCard>
      </div>
    </Layout>
  );
}
