import { SvgIconName } from "@/types";

interface ISvgIconProps {
  iconName: SvgIconName;
  width: string;
  height: string;
  fill: string;
}

const SVGIcon = ({ iconName, width, height, fill }: ISvgIconProps) => {
  const icons = {
    diamond: (
      <svg width={width} height={height} viewBox="0 0 72 73" fill={fill}>
        <path
          d="M35.9393 72.4997C34.1959 72.4845 32.4572 71.8117 31.127 70.4815L2.01846 41.373C-0.672816 38.6817 -0.672825 34.3183 2.01846 31.627L31.127 2.51846C33.8183 -0.172816 38.1817 -0.172825 40.873 2.51846L69.9815 31.627C71.3117 32.9572 71.9845 34.6959 71.9997 36.4393C72.0001 36.4798 72.0001 36.5202 71.9997 36.5607C71.9845 38.3041 71.3117 40.0428 69.9815 41.373L40.873 70.4815C39.5428 71.8117 37.8041 72.4845 36.0607 72.4997C36.0202 72.5001 35.9798 72.5001 35.9393 72.4997ZM34.3757 5.76713L21.4457 18.6971L36 33.2513L50.5543 18.6971L37.6243 5.76713C36.7272 4.87003 35.2728 4.87003 34.3757 5.76713ZM39.2487 36.5L53.8029 51.0543L66.7329 38.1243C67.63 37.2272 67.63 35.7728 66.7329 34.8757L53.8029 21.9457L39.2487 36.5ZM36 39.7487L21.4457 54.3029L34.3757 67.2329C35.2728 68.13 36.7272 68.13 37.6243 67.2329L50.5543 54.3029L36 39.7487ZM32.7513 36.5L18.1971 21.9457L5.26713 34.8757C4.37003 35.7728 4.37003 37.2272 5.26713 38.1243L18.1971 51.0543L32.7513 36.5Z"
          fill="#DAFF01"
        />
      </svg>
    ),
    flower: (
      <svg width={width} height={height} viewBox="0 0 72 73" fill={fill}>
        <path
          d="M27.7812 5.82696C29.1864 2.68739 32.3378 0.5 36 0.5C39.6622 0.5 42.8136 2.68739 44.2188 5.82696C47.0056 3.81064 50.8284 3.49198 54 5.3231C57.1716 7.15422 58.807 10.6242 58.4542 14.0458C61.8759 13.6928 65.346 15.3283 67.1772 18.5C69.0083 21.6716 68.6896 25.4945 66.6732 28.2813C69.8127 29.6865 72 32.8378 72 36.5C72 40.1622 69.8126 43.3135 66.6731 44.7188C68.6896 47.5056 69.0084 51.3286 67.1772 54.5003C65.346 57.6719 61.8759 59.3074 58.4543 58.9545C58.807 62.3759 57.1715 65.8458 54 67.6769C50.8284 69.508 47.0056 69.1894 44.2188 67.173C42.8136 70.3126 39.6623 72.5 36 72.5C32.3377 72.5 29.1864 70.3126 27.7812 67.173C24.9944 69.1894 21.1716 69.508 18 67.6769C14.8284 65.8458 13.1929 62.3758 13.5458 58.9542C10.1241 59.3071 6.65398 57.6716 4.82282 54.5C2.99168 51.3284 3.31037 47.5055 5.32675 44.7187C2.1873 43.3134 0 40.1622 0 36.5C0 32.8378 2.18738 29.6864 5.32692 28.2812C3.31039 25.4944 2.99163 21.6714 4.82282 18.4997C6.65399 15.328 10.1241 13.6926 13.5458 14.0455C13.1931 10.624 14.8285 7.15416 18 5.32309C21.1716 3.49198 24.9944 3.81064 27.7812 5.82696ZM36 5C33.5147 5 31.5 7.01463 31.5 9.49991C31.5 9.49991 31.5012 9.54915 31.5089 9.63812C31.5176 9.73803 31.5327 9.8722 31.557 10.0444C31.606 10.392 31.6841 10.8356 31.7951 11.3774C32.0174 12.4622 32.3455 13.8156 32.7563 15.3668C33.5765 18.4641 34.6803 22.1776 35.798 25.7808L36 26.4304L36.202 25.7808C37.3197 22.1776 38.4235 18.4641 39.2437 15.3668C39.6545 13.8156 39.9826 12.4622 40.2049 11.3774C40.3159 10.8356 40.394 10.392 40.443 10.0444C40.4673 9.8722 40.4824 9.73803 40.4911 9.63812C40.4988 9.54897 40.5 9.5 40.5 9.5C40.5 7.01472 38.4853 5 36 5ZM9 41C9 41 9.04897 40.9988 9.13812 40.9911C9.23803 40.9824 9.3722 40.9673 9.54439 40.943C9.892 40.894 10.3356 40.8159 10.8774 40.7049C11.9622 40.4826 13.3156 40.1545 14.8668 39.7437C17.9641 38.9235 21.6776 37.8197 25.2808 36.702L25.9304 36.5L25.2808 36.298C21.6776 35.1803 17.9641 34.0765 14.8668 33.2563C13.3156 32.8455 11.9622 32.5174 10.8774 32.2951C10.3356 32.1841 9.892 32.106 9.54439 32.057C9.3722 32.0327 9.23803 32.0176 9.13812 32.0089C9.04915 32.0012 8.99924 32 8.99924 32C6.51396 32 4.5 34.0147 4.5 36.5C4.5 38.9853 6.51472 41 9 41ZM40.5 63.5C40.5 63.5 40.4988 63.451 40.4911 63.3619C40.4824 63.262 40.4673 63.1278 40.443 62.9556C40.394 62.608 40.3159 62.1644 40.2049 61.6226C39.9826 60.5378 39.6545 59.1844 39.2437 57.6332C38.4235 54.5359 37.3197 50.8224 36.202 47.2192L36 46.5696L35.798 47.2192C34.6803 50.8224 33.5765 54.5359 32.7563 57.6332C32.3455 59.1844 32.0174 60.5378 31.7951 61.6226C31.6841 62.1644 31.606 62.608 31.557 62.9556C31.5327 63.1278 31.5176 63.262 31.5089 63.3619C31.5012 63.4508 31.5 63.5008 31.5 63.5008C31.5 65.986 33.5147 68 36 68C38.4853 68 40.5 65.9853 40.5 63.5ZM14.867 53.8971C14.867 53.8971 14.9089 53.8715 14.9822 53.8203C15.0644 53.7628 15.173 53.6827 15.31 53.5756C15.5865 53.3593 15.9316 53.0698 16.3453 52.7028C17.1737 51.9679 18.1818 51.007 19.3197 49.8757C21.5919 47.6167 24.256 44.804 26.8176 42.0345L27.2792 41.5348L26.6156 41.6846C22.9364 42.5183 19.1684 43.4191 16.076 44.2574C14.5273 44.6773 13.1911 45.0699 12.1405 45.4198C11.6158 45.5945 11.1925 45.7487 10.867 45.88C10.7057 45.9451 10.582 45.9991 10.4911 46.0415C10.4108 46.079 10.3664 46.1032 10.3664 46.1032C8.21408 47.3459 7.47729 50.0977 8.71993 52.25C9.96257 54.4023 12.7147 55.1397 14.867 53.8971ZM20.25 63.7798C22.4023 65.0224 25.1545 64.285 26.3971 62.1327C26.3971 62.1327 26.4208 62.0892 26.4584 62.0086C26.5009 61.9177 26.5549 61.794 26.62 61.6327C26.7513 61.3072 26.9054 60.8839 27.0802 60.3592C27.4301 59.3087 27.8227 57.9725 28.2425 56.4237C29.0808 53.3313 29.9817 49.5634 30.8153 45.8841L30.9652 45.2205L30.4654 45.6821C27.6959 48.2437 24.8832 50.9078 22.6243 53.18C21.4929 54.318 20.532 55.326 19.7972 56.1544C19.4301 56.5681 19.1407 56.9132 18.9244 57.1897C18.8173 57.3267 18.7371 57.4353 18.6797 57.5175C18.6245 57.5964 18.6025 57.6333 18.6025 57.6333C17.3598 59.7857 18.0977 62.5372 20.25 63.7798ZM61.6329 26.8971C63.7853 25.6545 64.5227 22.9023 63.2801 20.75C62.0374 18.5977 59.2859 17.8598 57.1336 19.1025C57.1336 19.1025 57.091 19.1285 57.0178 19.1797C56.9356 19.2371 56.827 19.3173 56.69 19.4244C56.4135 19.6407 56.0684 19.9301 55.6547 20.2972C54.8263 21.032 53.8182 21.9929 52.6803 23.1243C50.4081 25.3832 47.744 28.1959 45.1824 30.9654L44.7208 31.4652L45.3844 31.3153C49.0636 30.4817 52.8316 29.5808 55.924 28.7425C57.4727 28.3227 58.8089 27.9301 59.8595 27.5802C60.3842 27.4054 60.8075 27.2513 61.133 27.12C61.2943 27.0549 61.418 27.0009 61.5089 26.9584C61.5896 26.9207 61.6329 26.8971 61.6329 26.8971ZM51.75 9.22021C49.5977 7.97757 46.8459 8.71435 45.6032 10.8667C45.6032 10.8667 45.5823 10.9042 45.5415 10.9914C45.4991 11.0823 45.4451 11.206 45.38 11.3673C45.2487 11.6928 45.0945 12.1161 44.9198 12.6408C44.5699 13.6913 44.1773 15.0275 43.7574 16.5763C42.9191 19.6687 42.0183 23.4366 41.1846 27.1159L41.0348 27.7795L41.5345 27.3179C44.304 24.7563 47.1167 22.0922 49.3757 19.82C50.507 18.682 51.4679 17.6739 52.2028 16.8456C52.5698 16.4319 52.8593 16.0868 53.0756 15.8103C53.1827 15.6733 53.2628 15.5647 53.3203 15.4825C53.3755 15.4036 53.3971 15.3673 53.3971 15.3673C54.6397 13.215 53.9023 10.4629 51.75 9.22021ZM63 41C65.4853 41 67.5 38.9853 67.5 36.5C67.5 34.0147 65.486 32 63.0008 32C63.0008 32 62.9578 32.0006 62.8619 32.0089C62.762 32.0176 62.6278 32.0327 62.4556 32.057C62.108 32.106 61.6644 32.1841 61.1226 32.2951C60.0378 32.5174 58.6844 32.8455 57.1332 33.2563C54.0359 34.0765 50.3224 35.1803 46.7192 36.298L46.0696 36.5L46.7192 36.702C50.3224 37.8197 54.0359 38.9235 57.1332 39.7437C58.6844 40.1545 60.0378 40.4826 61.1226 40.7049C61.6644 40.8159 62.108 40.894 62.4556 40.943C62.6278 40.9673 62.762 40.9824 62.8619 40.9911C62.951 40.9988 63 41 63 41ZM8.71994 20.7497C7.4773 22.902 8.21473 25.6542 10.3671 26.8968C10.3671 26.8968 10.4103 26.9204 10.4911 26.9581C10.582 27.0006 10.7057 27.0546 10.867 27.1197C11.1925 27.251 11.6158 27.4052 12.1405 27.5799C13.1911 27.9298 14.5273 28.3224 16.076 28.7423C19.1684 29.5806 22.9364 30.4814 26.6156 31.315L27.2792 31.4649L26.8176 30.9651C24.256 28.1957 21.5919 25.383 19.3197 23.124C18.1818 21.9926 17.1737 21.0318 16.3453 20.2969C15.9316 19.9299 15.5865 19.6404 15.31 19.4241C15.173 19.317 15.0644 19.2369 14.9822 19.1794C14.9091 19.1282 14.867 19.1026 14.867 19.1026C12.7147 17.8599 9.96258 18.5974 8.71994 20.7497ZM18.6029 15.3673C18.6029 15.3673 18.6286 15.4093 18.6797 15.4825C18.7372 15.5647 18.8173 15.6733 18.9244 15.8103C19.1407 16.0868 19.4302 16.4319 19.7972 16.8456C20.5321 17.6739 21.493 18.682 22.6243 19.82C24.8833 22.0922 27.696 24.7563 30.4655 27.3179L30.9652 27.7795L30.8154 27.1159C29.9817 23.4366 29.0809 19.6687 28.2426 16.5763C27.8227 15.0275 27.4301 13.6913 27.0802 12.6407C26.9055 12.1161 26.7513 11.6928 26.62 11.3673C26.5549 11.206 26.5009 11.0823 26.4585 10.9914C26.4208 10.9107 26.3968 10.8667 26.3968 10.8667C25.1541 8.71435 22.4023 7.97757 20.25 9.22021C18.0977 10.4628 17.3603 13.215 18.6029 15.3673ZM63.2801 52.2503C64.5227 50.0979 63.7853 47.3458 61.633 46.1032C61.633 46.1032 61.5895 46.0795 61.5089 46.0418C61.418 45.9994 61.2943 45.9453 61.133 45.8803C60.8075 45.7489 60.3842 45.5948 59.8595 45.42C58.8089 45.0701 57.4727 44.6775 55.924 44.2577C52.8316 43.4194 49.0636 42.5186 45.3844 41.6849L44.7208 41.535L45.1824 42.0348C47.744 44.8043 50.4081 47.617 52.6803 49.876C53.8182 51.0073 54.8263 51.9682 55.6547 52.7031C56.0684 53.0701 56.4135 53.3596 56.69 53.5758C56.827 53.683 56.9356 53.7631 57.0178 53.8206C57.0906 53.8715 57.1329 53.8974 57.1329 53.8974C59.2853 55.14 62.0374 54.4026 63.2801 52.2503ZM45.6029 62.1327C46.8455 64.285 49.5977 65.0224 51.75 63.7798C53.9023 62.5372 54.6402 59.7857 53.3975 57.6333C53.3975 57.6333 53.3716 57.5909 53.3203 57.5175C53.2629 57.4353 53.1827 57.3267 53.0756 57.1897C52.8593 56.9132 52.5699 56.5681 52.2028 56.1544C51.468 55.3261 50.5071 54.318 49.3757 53.18C47.1168 50.9078 44.3041 48.2437 41.5346 45.6821L41.0348 45.2205L41.1847 45.8841C42.0183 49.5634 42.9192 53.3313 43.7575 56.4237C44.1773 57.9725 44.5699 59.3087 44.9198 60.3592C45.0946 60.8839 45.2487 61.3072 45.38 61.6327C45.4451 61.794 45.4991 61.9177 45.5416 62.0086C45.5794 62.0897 45.6029 62.1327 45.6029 62.1327ZM36 43.25C39.7279 43.25 42.75 40.2279 42.75 36.5C42.75 32.7721 39.7279 29.75 36 29.75C32.2721 29.75 29.25 32.7721 29.25 36.5C29.25 40.2279 32.2721 43.25 36 43.25Z"
          fill="#DAFF01"
        />
      </svg>
    ),
    repeat: (
      <svg width={width} height={height} viewBox="0 0 72 73" fill={fill}>
        <path
          d="M51.9019 32H69.5981C70.5519 32 71.073 33.1125 70.4623 33.8452L61.6143 44.4629C61.1645 45.0026 60.3355 45.0026 59.8858 44.4629L51.0377 33.8452C50.4271 33.1125 50.9481 32 51.9019 32Z"
          fill="#DAFF01"
        />
        <path
          d="M2.40193 41H20.0981C21.0519 41 21.573 39.8875 20.9623 39.1548L12.1143 28.5371C11.6645 27.9974 10.8355 27.9974 10.3858 28.5371L1.53768 39.1548C0.927062 39.8875 1.44811 41 2.40193 41Z"
          fill="#DAFF01"
        />
        <path
          d="M36 14C29.0138 14 22.7726 17.1813 18.6421 22.1828C17.8508 23.1409 16.4326 23.2761 15.4745 22.4849C14.5164 21.6936 14.3811 20.2754 15.1724 19.3172C20.121 13.3251 27.6148 9.5 36 9.5C49.2377 9.5 60.2461 19.0243 62.5549 31.5935C62.5797 31.7287 62.6035 31.8642 62.6263 32H58.0504C55.9668 21.73 46.8838 14 36 14ZM13.9496 41C16.0332 51.27 25.1162 59 36 59C42.9862 59 49.2275 55.8186 53.3579 50.8172C54.1492 49.8591 55.5674 49.7239 56.5255 50.5151C57.4837 51.3064 57.6189 52.7246 56.8276 53.6828C51.879 59.6749 44.3852 63.5 36 63.5C22.7623 63.5 11.7539 53.9757 9.44513 41.4065C9.4203 41.2713 9.39649 41.1358 9.37368 41H13.9496Z"
          fill="#DAFF01"
        />
      </svg>
    ),
  };

  return icons[iconName] || null;
};

SVGIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
};

export default SVGIcon;
