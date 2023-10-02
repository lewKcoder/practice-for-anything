import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
  useRef,
} from "react";

interface Tab {
  id: string;
  label: string;
}

export const Tabs: FunctionComponent<{ children: ReactNode[] }> = (props) => {
  const { children } = props;

  const [active, setActive] = useState(0);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeTabIndex = children.findIndex(
      (child, index) => index === active
    );
    const activeTabRef = tabRefs.current[activeTabIndex];

    if (indicatorRef.current && activeTabRef) {
      indicatorRef.current.style.left = `${activeTabRef.offsetLeft}px`;
      indicatorRef.current.style.width = `${activeTabRef.offsetWidth}px`;
    }
  }, [active]);

  return (
    <>
      {children.map((child, index) => (
        <button
          key={index}
          className={`tab ${index === active ? "active" : ""}`}
          id={`tab${index}`}
          onClick={() => setActive(index)}
          ref={(ref) => (tabRefs.current[index] = ref)}
        >
          {child}
        </button>
      ))}

      <div className="indicator" ref={indicatorRef}></div>

      {children.map(
        (child, index) => index === active && <div key={index}>{child}</div>
      )}

      <style jsx>{`
        .tabs {
          position: relative;
          display: flex;
        }

        .tab {
          flex-grow: 1;
          text-align: center;
          cursor: pointer;
          padding: 10px;
        }

        .indicator {
          position: absolute;
          bottom: 0;
          height: 3px;
          background-color: #007bff;
          transition: left 0.3s ease, width 0.3s ease;
        }

        #tab1.active + .indicator {
          left: 0;
          width: 100px;
        }
      `}</style>
    </>
  );
};
