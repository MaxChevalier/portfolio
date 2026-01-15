import type { Milestone } from "../../types/milestone";
import "./Timeline.scss";

type Props = {
  milestones: Milestone[];
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

export default function Timeline({ milestones }: Readonly<Props>) {
  return (
    <div className="timeline">
      <div className="section">
        {milestones.map((milestone, index) => (
          <div key={milestone.date} className="milestone">
            {index % 2 === 0 ? (
              <>
                <div className="milestone-title milestone-data">
                  <h3>{milestone.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: milestone.description,
                    }}
                  />
                </div>

                <div className="dot" />

                <div className="milestone-date milestone-data">
                  {formatDate(milestone.date)} { milestone.dateFin ? `→ ${formatDate(milestone.dateFin)}` : "" }
                </div>
              </>
            ) : (
              <>
                <div
                className="milestone-date milestone-data"
                style={{ alignItems: "flex-end" }}
                >
                  {formatDate(milestone.date)} { milestone.dateFin ? `→ ${formatDate(milestone.dateFin)}` : "" }
                </div>

                <div className="dot" />

                <div className="milestone-title milestone-data">
                  <h3>{milestone.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: milestone.description,
                    }}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
