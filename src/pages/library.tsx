import Layout from "@/components/layout/Layout";
import LibButton, {
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonTypeEnum,
} from "@/components/library/Button";
import LibCard from "@/components/library/Card";
import { IconNameEnum } from "@/components/library/Icon";

export default function LibraryPage() {
  const headingClasses = "text-xl font-bold";
  const wrapperClasses = "flex items-center flex-wrap space-x-4 mt-1";

  return (
    <Layout>
      <LibCard heading="Buttons">
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
              <LibButton color={ButtonColorEnum.Secondary}>Secondary</LibButton>
              <LibButton color={ButtonColorEnum.Light}>Light</LibButton>
              <LibButton isLoading>Loading</LibButton>
              <LibButton size={ButtonSizeEnum.Small}>Small</LibButton>
              <LibButton size={ButtonSizeEnum.Large}>Large</LibButton>
            </div>
            <div className={wrapperClasses}>
              <LibButton isDisabled>Primary</LibButton>
              <LibButton color={ButtonColorEnum.Secondary} isDisabled>
                Secondary
              </LibButton>
              <LibButton color={ButtonColorEnum.Light} isDisabled>
                Light
              </LibButton>
              <LibButton isLoading isDisabled>
                Loading
              </LibButton>
              <LibButton size={ButtonSizeEnum.Small} isDisabled>
                Small
              </LibButton>
              <LibButton size={ButtonSizeEnum.Large} isDisabled>
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
              <LibButton type={ButtonTypeEnum.Outline} isFullWidth>
                Full Width
              </LibButton>
            </div>
            <div className={wrapperClasses}>
              <LibButton type={ButtonTypeEnum.Outline}>Primary</LibButton>
              <LibButton
                type={ButtonTypeEnum.Outline}
                color={ButtonColorEnum.Secondary}
              >
                Secondary
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Outline}
                color={ButtonColorEnum.Light}
              >
                Light
              </LibButton>
              <LibButton type={ButtonTypeEnum.Outline} isLoading>
                Loading
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Outline}
                size={ButtonSizeEnum.Small}
              >
                Small
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Outline}
                size={ButtonSizeEnum.Large}
              >
                Large
              </LibButton>
            </div>
            <div className={wrapperClasses}>
              <LibButton type={ButtonTypeEnum.Outline} isDisabled>
                Primary
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Outline}
                color={ButtonColorEnum.Secondary}
                isDisabled
              >
                Secondary
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Outline}
                color={ButtonColorEnum.Light}
                isDisabled
              >
                Light
              </LibButton>
              <LibButton type={ButtonTypeEnum.Outline} isLoading isDisabled>
                Loading
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Outline}
                size={ButtonSizeEnum.Small}
                isDisabled
              >
                Small
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Outline}
                size={ButtonSizeEnum.Large}
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
              <LibButton type={ButtonTypeEnum.Text}>Primary</LibButton>
              <LibButton
                type={ButtonTypeEnum.Text}
                color={ButtonColorEnum.Secondary}
              >
                Secondary
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Text}
                color={ButtonColorEnum.Light}
              >
                Light
              </LibButton>
              <LibButton type={ButtonTypeEnum.Text} isLoading>
                Loading
              </LibButton>
              <LibButton type={ButtonTypeEnum.Text} size={ButtonSizeEnum.Small}>
                Small
              </LibButton>
              <LibButton type={ButtonTypeEnum.Text} size={ButtonSizeEnum.Large}>
                Large
              </LibButton>
            </div>
            <div className={wrapperClasses}>
              <LibButton type={ButtonTypeEnum.Text} isDisabled>
                Primary
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Text}
                color={ButtonColorEnum.Secondary}
                isDisabled
              >
                Secondary
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Text}
                color={ButtonColorEnum.Light}
                isDisabled
              >
                Light
              </LibButton>
              <LibButton type={ButtonTypeEnum.Text} isLoading isDisabled>
                Loading
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Text}
                size={ButtonSizeEnum.Small}
                isDisabled
              >
                Small
              </LibButton>
              <LibButton
                type={ButtonTypeEnum.Text}
                size={ButtonSizeEnum.Large}
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
                type={ButtonTypeEnum.Icon}
                iconName={IconNameEnum.Home}
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                color={ButtonColorEnum.Secondary}
                iconName={IconNameEnum.Home}
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                color={ButtonColorEnum.Light}
                iconName={IconNameEnum.Home}
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                iconName={IconNameEnum.Home}
                isLoading
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                iconName={IconNameEnum.Home}
                size={ButtonSizeEnum.Small}
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                iconName={IconNameEnum.Home}
                size={ButtonSizeEnum.Large}
              />
            </div>
            <div className={wrapperClasses}>
              <LibButton
                type={ButtonTypeEnum.Icon}
                iconName={IconNameEnum.Home}
                isDisabled
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                color={ButtonColorEnum.Secondary}
                iconName={IconNameEnum.Home}
                isDisabled
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                color={ButtonColorEnum.Light}
                iconName={IconNameEnum.Home}
                isDisabled
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                iconName={IconNameEnum.Home}
                isLoading
                isDisabled
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                iconName={IconNameEnum.Home}
                size={ButtonSizeEnum.Small}
                isDisabled
              />
              <LibButton
                type={ButtonTypeEnum.Icon}
                iconName={IconNameEnum.Home}
                size={ButtonSizeEnum.Large}
                isDisabled
              />
            </div>
          </div>
        </div>
      </LibCard>
    </Layout>
  );
}
