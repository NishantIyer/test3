import { useId } from "react";
import styles from "./features.module.css";
import useLocalesMap from "./use-locales-map";
import { featuresMap, titleMap } from "../translations/text";

import ComputeCreditsIcon from "../components/icons/compute-credits";
import EdgeInspiredIcon from "../components/icons/edgeinspired";
import LatencyReductionIcon from "../components/icons/latencyreduction";
import RemoteLocalIcon from "../components/icons/remote-local";
import PRCPIcon from "../components/icons/prcp";
import TaskPriorityIcon from "../components/icons/taskpriority";
import DRATPIcon from "../components/icons/dratp";

export function Feature({ text, icon }) {
  return (
    <div className={styles.feature}>
      {icon}
      <h4>{text}</h4>
    </div>
  );
}

/** @type {{ key: string; icon: React.FC }[]} */
const FEATURES_LIST = [
  { key: "edge", icon: <EdgeInspiredIcon /> },
  { key: "latency", icon: <LatencyReductionIcon /> },
  { key: "remote", icon: <RemoteLocalIcon /> },
  { key: "dratp", icon: <DRATPIcon /> },
  { key: "credits", icon: <ComputeCreditsIcon /> },
  { key: "prcp", icon: <PRCPIcon /> },
  { key: "task", icon: <TaskPriorityIcon /> },
];

export default function Features() {
  const keyId = useId();
  const title = useLocalesMap(titleMap);
  const features = useLocalesMap(featuresMap);

  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p className="text-lg mb-2 text-gray-600 md:!text-2xl">{title}</p>
      <div className={styles.features}>
        {FEATURES_LIST.map(({ key, icon }) => (
          <Feature text={features[key]} icon={icon} key={keyId + key} />
        ))}
      </div>
    </div>
  );
}
