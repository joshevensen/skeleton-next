import {
  mdiAlertOctagonOutline,
  mdiAlertOutline,
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiBookshelf,
  mdiCheckCircleOutline,
  mdiChevronDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronUp,
  mdiClose,
  mdiCog,
  mdiDotsHorizontal,
  mdiHome,
  mdiInformationOutline,
  mdiMenu,
  mdiPencil,
  mdiPencilBox,
  mdiPlus,
  mdiSquareEditOutline,
} from "@mdi/js";

const libConfig = {
  // This url points to the api directory inside pages
  httpBaseURL: "/api/",
  // Add SVG Paths with names here. See README for more info
  icons: {
    // Common App Icons
    Add: mdiPlus,
    Back: mdiArrowLeft,
    Close: mdiClose,
    Collapse: mdiChevronUp,
    Edit: mdiSquareEditOutline,
    Expand: mdiChevronDown,
    Next: mdiChevronRight,
    Prev: mdiChevronLeft,
    Right: mdiArrowRight,
    Down: mdiArrowDown,
    Left: mdiArrowLeft,
    Up: mdiArrowUp,
    Menu: mdiMenu,
    More: mdiDotsHorizontal,

    // Notification Icons
    Info: mdiInformationOutline,
    Danger: mdiAlertOctagonOutline,
    Warning: mdiAlertOutline,
    Success: mdiCheckCircleOutline,

    // App Specific Icons
    Home: mdiHome,
    Settings: mdiCog,
    Library: mdiBookshelf,
  },
};

export default libConfig;
